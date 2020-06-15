
/**
 * Quasar QCard component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/card|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QCard',
  props: {
    /**
     * HTML tag to render
     * @type {String}
     */
    tag: {
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
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    }
  }
}
