
/**
 * Quasar QTime component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/time|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTime',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String} value New model value 
     * @param {{year : Number, month : Number, day : Number, hour : Number, minute : Number, second : Number, millisecond : Number, changed : Boolean}} details Object of properties on the new model 
     */      
    '@input': function (value,details) {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Time of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    value: {
      type: String,
      required: true
    },
    /**
     * Display the component in landscape mode
     * @type {Boolean}
     */
    landscape: {
      type: Boolean,
    },
    /**
     * Mask (formatting string) used for parsing and formatting value
     * @type {String}
     */
    mask: {
      type: String,
    },
    /**
     * Locale formatting options
     * @type {{days : Array, daysShort : Array, months : Array, monthsShort : Array}}
     */
    locale: {
      type: Object,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    calendar: {
      type: String,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    'calendar="gregorian"': {
      type: Boolean,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    'calendar="persian"': {
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
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
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
    },
    /**
     * Forces 24 hour time display instead of AM/PM system
     * @type {Boolean}
     */
    format24h: {
      type: Boolean,
    },
    /**
     * The default date to use (in YYYY/MM/DD format) when model is unfilled (undefined or null)
     * @type {String}
     */
    defaultDate: {
      type: String,
    },
    /**
     * Optionally configure what time is the user allowed to set; Overridden by 'hour-options', 'minute-options' and 'second-options' if those are set; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    options: {
      type: Function,
    },
    /**
     * Optionally configure what hours is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    hourOptions: {
      type: Array,
    },
    /**
     * Optionally configure what minutes is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    minuteOptions: {
      type: Array,
    },
    /**
     * Optionally configure what seconds is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    secondOptions: {
      type: Array,
    },
    /**
     * Allow the time to be set with seconds
     * @type {Boolean}
     */
    withSeconds: {
      type: Boolean,
    },
    /**
     * Display a button that selects the current time
     * @type {Boolean}
     */
    nowBtn: {
      type: Boolean,
    }
  }
}
