
/**
 * Quasar QAvatar component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/avatar|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QAvatar',
  props: {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * The size in CSS units, including unit name, of the content (icon, text)
     * @type {String}
     */
    fontSize: {
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
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
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
