
/**
 * Quasar QBanner component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/banner|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBanner',
  props: {
    /**
     * Display actions on same row as content
     * @type {Boolean}
     */
    inlineActions: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
