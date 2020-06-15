
/**
 * Quasar QLinearProgress component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/linear-progress|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QLinearProgress',
  props: {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Progress value (0.0 < x < 1.0)
     * @type {Number}
     */
    value: {
      type: Number,
    },
    /**
     * Optional buffer value (0.0 < x < 1.0)
     * @type {Number}
     */
    buffer: {
      type: Number,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Color name for component's track from the Quasar Color Palette
     * @type {String}
     */
    trackColor: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Reverse direction of progress
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    },
    /**
     * Draw stripes; For determinate state only (for performance reasons)
     * @type {Boolean}
     */
    stripe: {
      type: Boolean,
    },
    /**
     * Put component into indeterminate mode
     * @type {Boolean}
     */
    indeterminate: {
      type: Boolean,
    },
    /**
     * Put component into query mode
     * @type {Boolean}
     */
    query: {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    }
  }
}
