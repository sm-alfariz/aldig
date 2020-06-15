
/**
 * Quasar QRating component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/rating|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QRating',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@input': function (value) {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     * @type {String}
     */
    name: {
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
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number}
     */
    value: {
      type: Number,
    },
    /**
     * Number of icons to display
     * @type {Number|String}
     */
    max: {
      type: [Number,String],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     * @type {String|Array}
     */
    icon: {
      type: [String,Array],
    },
    /**
     * Icon name following Quasar convention to be used when selected (optional); make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     * @type {String|Array}
     */
    iconSelected: {
      type: [String,Array],
    },
    /**
     * Icon name following Quasar convention to be used when selected (optional); make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     * @type {String|Array}
     */
    iconHalf: {
      type: [String,Array],
    },
    /**
     * Color name for component from the Quasar Color Palette; v1.5.0+: If an array is provided each rating value will use the corresponding color in the array (0 based)
     * @type {String|Array}
     */
    color: {
      type: [String,Array],
    },
    /**
     * Color name from the Quasar Palette for selected icons
     * @type {String|Array}
     */
    colorSelected: {
      type: [String,Array],
    },
    /**
     * Color name from the Quasar Palette for half selected icons
     * @type {String|Array}
     */
    colorHalf: {
      type: [String,Array],
    },
    /**
     * Does not lower opacity for unselected icons
     * @type {Boolean}
     */
    noDimming: {
      type: Boolean,
    },
    /**
     * When used, disables default behavior of clicking/tapping on icon which represents current model value to reset model to 0
     * @type {Boolean}
     */
    noReset: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    }
  }
}
