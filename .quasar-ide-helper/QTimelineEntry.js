
/**
 * Quasar QTimelineEntry component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/timeline-entry|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTimelineEntry',
  props: {
    /**
     * Tag to use, if of type 'heading' only
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Defines a heading timeline item
     * @type {Boolean}
     */
    heading: {
      type: Boolean,
    },
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     * @type {'left'|'right'}
     */
    side: {
      type: String,
    },
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     * @type {'left'|'right'}
     */
    'side="left"': {
      type: Boolean,
    },
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     * @type {'left'|'right'}
     */
    'side="right"': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * URL to the avatar image; Icon takes precedence if used, so it replaces avatar
     * @type {String}
     */
    avatar: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Title of timeline entry; Is overridden if using 'title' slot
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Subtitle of timeline entry; Is overridden if using 'subtitle' slot
     * @type {String}
     */
    subtitle: {
      type: String,
    },
    /**
     * Body content of timeline entry; Use this prop or the default slot
     * @type {String}
     */
    body: {
      type: String,
    }
  }
}
