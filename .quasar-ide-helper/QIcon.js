
/**
 * Quasar QIcon component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/icon|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QIcon',
  props: {
    /**
     * HTML tag to render, unless no icon is supplied or it's an svg icon
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Name of the icon, following Quasar convention
     * @type {String}
     */
    name: {
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
     * Useful if icon is on the left side of something: applies a standard margin on the right side of Icon
     * @type {Boolean}
     */
    left: {
      type: Boolean,
    },
    /**
     * Useful if icon is on the right side of something: applies a standard margin on the left side of Icon
     * @type {Boolean}
     */
    right: {
      type: Boolean,
    }
  }
}
