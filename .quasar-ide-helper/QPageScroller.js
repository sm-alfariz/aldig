
/**
 * Quasar QPageScroller component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/page-scroller|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPageScroller',
  props: {
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    position: {
      type: String,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="topRight"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="topLeft"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottomRight"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottomLeft"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="top"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="right"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottom"': {
      type: Boolean,
    },
    /**
     * Page side/corner to stick to
     * @type {'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top'|'right'|'bottom'|'left'}
     */
    'position="left"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     * @type {Boolean}
     */
    expand: {
      type: Boolean,
    },
    /**
     * Scroll offset (in pixels) from which point the component is shown on page; Measured from the top of the page (or from the bottom if in 'reverse' mode)
     * @type {Number}
     */
    scrollOffset: {
      type: Number,
    },
    /**
     * Work in reverse (shows when scrolling to the top of the page and scrolls to bottom when triggered)
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    },
    /**
     * Duration (in milliseconds) of the scrolling until it reaches its target
     * @type {Number}
     */
    duration: {
      type: Number,
    }
  }
}
