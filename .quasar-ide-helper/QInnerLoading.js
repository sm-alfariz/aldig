
/**
 * Quasar QInnerLoading component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/inner-loading|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QInnerLoading',
  props: {
    /**
     * Size in CSS units, including unit name, or standard size name (xs|sm|md|lg|xl), for the inner Spinner (unless using the default slot)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * State - loading or not
     * @type {Boolean}
     */
    showing: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
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
