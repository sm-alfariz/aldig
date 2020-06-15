
/**
 * Quasar QChip component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/chip|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QChip',
  props: {
    /**
     * Emitted on QChip click if 'clickable' property is set
     * @param {Object} evt JS event object 
     */      
    '@click': function (evt) {},

    /**
     * Used by Vue on 'selected.sync' prop for updating its value
     * @param {Boolean} state Selected state 
     */      
    '@update:selected': function (state) {},

    /**
     * Works along with 'value' and 'removable' prop. Emitted when toggling rendering state of the QChip
     * @param {Boolean} state Render state (render or not) 
     */      
    '@remove': function (state) {},
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * QChip size name or a CSS unit including unit name
     * @type {String}
     */
    size: {
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
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconRight: {
      type: String,
    },
    /**
     * Chip's content as string; overrides default slot if specified
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
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
     * Model of the component determining if QChip should be rendered or not
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Model for QChip if it's selected or not
     * @type {Boolean}
     */
    selected: {
      type: Boolean,
    },
    /**
     * Sets a low value for border-radius instead of the default one, making it close to a square
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Display using the 'outline' design
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Is QChip clickable? If it's the case, then it will add hover effects and emit 'click' events
     * @type {Boolean}
     */
    clickable: {
      type: Boolean,
    },
    /**
     * If set, then it displays a 'remove' icon that when clicked the QChip emits 'remove' event
     * @type {Boolean}
     */
    removable: {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
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
