
/**
 * Quasar QImg component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/img|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QImg',
  props: {
    /**
     * Emitted when image has been loaded by the browser
     * @param {String} src URL of image that has been loaded; useful when using 'srcset' and/or 'sizes' 
     */      
    '@load': function (src) {},

    /**
     * Emitted when browser could not load the image
     * @param {Error} src JS Error object 
     */      
    '@error': function (src) {},
    /**
     * Force the component to maintain an aspect ratio
     * @type {String|Number|String|Number}
     */
    ratio: {
      type: [String,Number,String,Number],
    },
    /**
     * Path to image
     * @type {String}
     */
    src: {
      type: String,
    },
    /**
     * Same syntax as <img> srcset attribute.
     * @type {String}
     */
    srcset: {
      type: String,
    },
    /**
     * Same syntax as <img> sizes attribute.
     * @type {String}
     */
    sizes: {
      type: String,
    },
    /**
     * Forces image width; Must also include the unit (px or %)
     * @type {String}
     */
    width: {
      type: String,
    },
    /**
     * Forces image height; Must also include the unit (px or %)
     * @type {String}
     */
    height: {
      type: String,
    },
    /**
     * Specifies an alternate text for the image, if the image cannot be displayed
     * @type {String}
     */
    alt: {
      type: String,
    },
    /**
     * While waiting for your image to load, you can use a placeholder image
     * @type {String}
     */
    placeholderSrc: {
      type: String,
    },
    /**
     * Do not use transitions; faster render
     * @type {Boolean}
     */
    basic: {
      type: Boolean,
    },
    /**
     * Make sure that the image getting displayed is fully contained, regardless if additional blank space besides the image is needed on horizontal or vertical
     * @type {Boolean}
     */
    contain: {
      type: Boolean,
    },
    /**
     * Equivalent to CSS background-position property
     * @type {String}
     */
    position: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transition: {
      type: String,
    },
    /**
     * Class definitions to be attributed to the container of image; Does not apply to the caption
     * @type {Array|String|Object}
     */
    imgClass: {
      type: [Array,String,Object],
    },
    /**
     * Apply CSS to the container of the image; Does not apply to the caption
     * @type {Object}
     */
    imgStyle: {
      type: Object,
    },
    /**
     * Color name for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    spinnerColor: {
      type: String,
    },
    /**
     * Size in CSS units, including unit name, for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    spinnerSize: {
      type: String,
    },
    /**
     * Do not display the default spinner when loading images (unless you are specifying one through the 'loading' slot)
     * @type {Boolean}
     */
    noDefaultSpinner: {
      type: Boolean,
    },
    /**
     * Enable the native context menu of the image
     * @type {Boolean}
     */
    nativeContextMenu: {
      type: Boolean,
    }
  }
}
