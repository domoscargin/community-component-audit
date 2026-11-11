import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { it } from 'node:test'
import { createClient } from '../lib/github.mjs'

async function clientForTest(t) {
  const cacheDir = await mkdtemp(join(tmpdir(), 'topic-evidence-test-'))
  t.after(() => rm(cacheDir, { recursive: true }))
  const previous = process.env.GITHUB_TOKEN
  process.env.GITHUB_TOKEN = 'test-token'
  try {
    return createClient({ cacheDir, refresh: true })
  } finally {
    if (previous === undefined) delete process.env.GITHUB_TOKEN
    else process.env.GITHUB_TOKEN = previous
  }
}

it('retries secondary rate limits without retry-after, waiting before the next request', async (t) => {
  const client = await clientForTest(t)
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let signalWarning
  const warned = new Promise((resolve) => { signalWarning = resolve })
  t.mock.method(console, 'warn', signalWarning)
  let calls = 0
  t.mock.method(globalThis, 'fetch', async () => {
    calls++
    return calls === 1
      ? new Response(JSON.stringify({ message: 'You have exceeded a secondary rate limit.' }), {
        status: 403, statusText: 'Forbidden'
      })
      : new Response(JSON.stringify({ total_count: 0, incomplete_results: false, items: [] }))
  })
  const pending = client.topicIssueSearch('org:example is:public "dark mode"', 3)
  assert.match(await warned, /Rate limited, waiting 60s/)
  assert.equal(calls, 1)
  t.mock.timers.tick(60_000)
  const result = await pending
  assert.equal(calls, 2)
  assert.equal(result.totalCount, 0)
})

it('does not retry unrelated permission errors as rate limits', async (t) => {
  const client = await clientForTest(t)
  let calls = 0
  t.mock.method(globalThis, 'fetch', async () => {
    calls++
    return new Response('Resource not accessible by integration', { status: 403, statusText: 'Forbidden' })
  })
  await assert.rejects(client.topicIssueSearch('org:example is:public "dark mode"', 3),
    /GitHub 403 Forbidden.*Resource not accessible/)
  assert.equal(calls, 1)
})
