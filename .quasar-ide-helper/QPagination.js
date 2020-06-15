
/**
 * Quasar QPagination component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/pagination|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPagination',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String} value New model value 
     */      
    '@input': function (value) {},
    /**
     * Current page (must be between min/max)
     * @type {Number}
     */
    value: {
      type: Number,
      required: true
    },
    /**
     * Minimum page (must be lower than 'max')
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * Number of last page (must be higher than 'min')
     * @type {Number}
     */
    max: {
      type: Number,
      required: true
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
     * Notify the component that the background is a dark color (useful when you are using it along with the 'input' prop)
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Style definitions to be attributed to the input (if using one)
     * @type {Array|String|Object}
     */
    inputStyle: {
      type: [Array,String,Object],
    },
    /**
     * Class definitions to be attributed to the input (if using one)
     * @type {Array|String|Object}
     */
    inputClass: {
      type: [Array,String,Object],
    },
    /**
     * Button size in CSS units, including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Use an input instead of buttons
     * @type {Boolean}
     */
    input: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconPrev: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconNext: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconFirst: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconLast: {
      type: String,
    },
    /**
     * Generate link for page buttons; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    toFn: {
      type: Function,
    },
    /**
     * Show boundary button links
     * @type {Boolean}
     */
    boundaryLinks: {
      type: Boolean,
    },
    /**
     * Always show first and last page buttons (if not using 'input')
     * @type {Boolean}
     */
    boundaryNumbers: {
      type: Boolean,
    },
    /**
     * Show direction buttons
     * @type {Boolean}
     */
    directionLinks: {
      type: Boolean,
    },
    /**
     * Show ellipses (...) when pages are available
     * @type {Boolean}
     */
    ellipses: {
      type: Boolean,
    },
    /**
     * Maximum number of page links to display at a time; 0 means Infinite
     * @type {Number}
     */
    maxPages: {
      type: Number,
    },
    /**
     * Configure buttons material ripple (disable it by setting it to 'false' or supply a config object); Does not applies to boundary and ellipsis buttons
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    }
  }
}
