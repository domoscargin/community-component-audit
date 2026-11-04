/**
 * Names that mean the same thing across design systems.
 *
 * Keys are the canonical name for a cluster (use the GOV.UK Frontend or
 * GOV.UK Design System name where one exists). Values are aliases. Names are
 * normalised and singularised before comparison, so you don't need to list
 * plurals or `snake_case` variants.
 *
 * Aliases are also used to match community backlog discussion and issue
 * titles, so phrases people write (like "download links") are useful here
 * even if no design system uses them as a name.
 *
 * @type {Record<string, string[]>}
 */
export const synonyms = {
  // GOV.UK Frontend components
  accordion: ['accordion-section'],
  'back-link': ['back-link-helper', 'back-button'],
  breadcrumbs: ['breadcrumb', 'contextual-breadcrumbs'],
  button: ['button-link', 'button-as-link', 'link-button'],
  checkboxes: ['checkbox'],
  'character-count': ['char-check-limit'],
  'cookie-banner': ['cookies-banner', 'cookie-notification', 'cookie-message'],
  'error-message': ['error'],
  'exit-this-page': ['hide-this-page'],
  fieldset: ['legend'],
  'file-upload': ['file-input', 'upload'],
  footer: ['site-footer', 'layout-footer', 'page-footer'],
  header: [
    'global-header',
    'site-header',
    'layout-header',
    'layout-super-navigation-header',
    'ucdm-header',
    'header-bar',
    'service-header'
  ],
  hint: ['hint-text'],
  'language-navigation': [
    'language-switcher',
    'language-selector',
    'service-navigation-language-select',
    'change-language',
    'translation-nav',
    'welsh-language-toggle',
    'language-toggle',
    'toggle-to-welsh',
    'multiple-languages'
  ],
  pagination: [
    'content-pagination',
    'sequential-navigation',
    'previous-and-next-navigation',
    'pager'
  ],
  panel: ['confirmation-message'],
  'password-input': ['password', 'password-reveal'],
  details: ['collapsible'],
  radios: ['radio', 'radio-button', 'conditional-radio', 'radio-group'],
  'service-navigation': [
    'primary-navigation',
    'site-navigation',
    'navigation',
    'navigation-bar',
    'primary-nav'
  ],
  'skip-link': ['skip-links', 'skip-to-content'],
  select: ['select-input'],
  'summary-list': ['summary-card'],
  textarea: ['text-area'],
  tag: ['status-tag', 'pill'],
  table: ['tables'],
  'task-list': ['status-tags-in-task-list-pages', 'task-list-item'],
  'text-input': ['input'],
  'warning-text': ['warning', 'warning-callout'],

  // GOV.UK Design System patterns
  addresses: ['address-input', 'address-output', 'find-an-address'],
  'check-answers': ['check-your-answers'],
  'complete-multiple-tasks': ['task-list-pages'],
  'contact-a-department-or-service-team': ['contact-a-service'],
  'cookies-page': ['cookies-settings', 'cookie-settings'],
  'gender-or-sex': ['ask-sex-or-gender', 'sex-gender'],
  'interruption-pages': ['interruption-card', 'interruption-page'],
  'page-not-found-pages': ['page-not-found', 'not-found', 'error-page'],
  'problem-with-the-service-pages': ['there-is-a-problem-with-the-service'],
  'question-pages': ['question'],
  'service-unavailable-pages': ['service-unavailable'],
  'step-by-step-navigation': [
    'step-navigation',
    'step-by-step-nav',
    'step-by-step-nav-header',
    'step-by-step-nav-related'
  ],

  // Community-only components
  'a-to-z': ['a-z-navigation', 'a-to-z-page'],
  'add-another': ['add-to-a-list', 'add-another-thing'],
  alert: [
    'status-message',
    'notification-message',
    'success-alert',
    'error-alert',
    'error-banner',
    'flash-message',
    'flash'
  ],
  autocomplete: [
    'autosuggest',
    'accessible-autocomplete',
    'search-with-autocomplete',
    'select-with-search'
  ],
  'back-to-top': ['back-to-top-link'],
  'big-number': ['glance-metric', 'metric-summary', 'stat'],
  'browser-banner': ['outdated-browser'],
  card: ['image-card', 'card-list'],
  chart: ['line-chart'],
  'code-block': ['code'],
  'contact-details': ['contact-panel'],
  'copy-to-clipboard': ['copy', 'copy-button'],
  'contents-list': ['table-of-contents', 'contents-nav', 'contents-links'],
  'currency-input': ['currency'],
  'date-picker': [
    'datepicker',
    'calendar',
    'date-selector',
    'calendar-date-picker'
  ],
  'internal-header': ['internal-service-header'],
  'external-link': ['new-tab-link', 'open-links-in-a-new-window-or-tab'],
  'file-download': [
    'download-resources',
    'attachment',
    'attachment-link',
    'files-list',
    'download',
    'download-links'
  ],
  filter: [
    'search-filter',
    'filter-chips',
    'compound-filters',
    'option-select',
    'filter-a-list',
    'filter-layout',
    'filter-panel',
    'filter-group',
    'filter-form',
    'checkbox-filter',
    'filter-checkbox'
  ],
  hero: ['feature-header', 'masthead', 'inverse-header'],
  'inset-text': ['callout'],
  'identity-bar': ['quick-reference', 'key-details-bar', 'key-detail'],
  image: ['images', 'picture', 'figure'],
  'loading-spinner': [
    'spinner',
    'loader',
    'loading',
    'button-spinner',
    'form-spinner',
    'progress-indicator'
  ],
  message: [
    'messages',
    'message-list',
    'send-and-reply-to-messages',
    'chat-message'
  ],
  modal: ['modal-dialogue', 'modal-dialog', 'dialog', 'alert-dialog'],
  'no-results': ['empty-state'],
  'multi-file-upload': ['upload-files'],
  'page-heading': ['page-header', 'title', 'page-title'],
  'print-link': ['print-this-page', 'print-button'],
  quote: ['blockquote', 'pull-quotes'],
  'related-navigation': [
    'related-content',
    'related-links',
    'related-item',
    'related-nav'
  ],
  'rich-text-editor': ['wysiwyg-editor', 'wysiwyg', 'editor', 'markdown-editor'],
  search: [
    'search-field',
    'search-input',
    'site-search',
    'search-box',
    'search-form'
  ],
  'share-links': ['share-page'],
  'side-navigation': ['section-navigation', 'side-menu', 'side-nav'],
  'site-banner': [
    'announcement-banner',
    'emergency-banner',
    'global-banner',
    'announcement'
  ],
  'sub-navigation': [
    'secondary-navigation',
    'subnav',
    'tabbed-navigation',
    'horizontal-navigation'
  ],
  'time-input': ['time-picker'],
  timeline: ['activity-log'],
  'timeout-warning': [
    'timeout-dialog',
    'timeout-modal',
    'timeout-panel',
    'timeout-page',
    'extend-session',
    'service-timeout',
    'manage-service-timing-out',
    'manage-a-service-timing-out',
    'manage-a-session-timeout'
  ],
  tooltip: ['toggletip'],
  'user-research-banner': ['intervention', 'research-banner'],

  // Community-only patterns
  'access-a-service': ['access-service'],
  'add-multiple-things': ['manage-a-list', 'edit-a-list'],
  'hub-page': ['hub-and-spoke', 'mini-hub'],
  'leave-a-service': ['leave-service'],
  'make-a-declaration': ['declarations'],
  'passport-details': ['enter-passport-details'],
  'save-and-return': ['save-and-sign-out', 'save-their-progress'],
  'search-for-something': ['search-pattern'],
  'send-a-letter': ['letter', 'sending-letters'],
  'send-an-email': ['email', 'sending-emails']
}

/**
 * Explicit "partially covered by" links from a cluster to our components or
 * patterns. Clusters listed here are scored as `partial` instead of `gap`.
 *
 * @type {Record<string, string[]>}
 */
export const related = {
  'action-link': ['button'],
  alert: ['notification-banner'],
  autocomplete: ['select'],
  badge: ['tag'],
  'button-menu': ['button'],
  'currency-input': ['text-input'],
  'date-picker': ['date-input'],
  'description-list': ['summary-list'],
  'filter-toggle-button': ['button'],
  'internal-header': ['header'],
  'list-with-actions': ['summary-list'],
  'multi-file-upload': ['file-upload'],
  'multi-select': ['checkboxes'],
  'mutually-exclusive': ['checkboxes'],
  'notification-badge': ['tag'],
  'organisation-switcher': ['service-navigation'],
  'page-header-actions': ['button'],
  'report-technical-issue': ['feedback'],
  'side-navigation': ['service-navigation'],
  'site-banner': ['notification-banner'],
  'sortable-table': ['table'],
  'sub-navigation': ['service-navigation'],
  'ticket-panel': ['panel'],
  'user-research-banner': ['notification-banner']
}

/**
 * Aliases too generic to match freely in issue and discussion titles. These
 * only match when they're the whole title, a title prefix ("Details: …") or
 * followed by "component", "pattern" or "page".
 */
export const textMatchStoplist = [
  'all',
  'banner',
  'caption',
  'code',
  'copy',
  'currency',
  'date',
  'details',
  'download',
  'edge',
  'email',
  'error',
  'example',
  'field',
  'heading',
  'highlight',
  'icon',
  'image',
  'input',
  'label',
  'letter',
  'link',
  'list',
  'message',
  'name',
  'navigation',
  'news',
  'page',
  'pane',
  'password',
  'question',
  'scroll',
  'select',
  'status',
  'summary',
  'text',
  'time',
  'title',
  'upload',
  'video',
  'warning'
]
