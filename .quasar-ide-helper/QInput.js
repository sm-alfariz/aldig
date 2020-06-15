
/**
 * Quasar QInput component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/input|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QInput',
  props: {
    /**
     * When using the 'clearable' property, this event is emitted when the clear icon is clicked
     * @param {*} value The previous value before clearing it 
     */      
    '@clear': function (value) {},

    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String|Number} value New model value 
     */      
    '@input': function (value) {},

    /**
     * Emitted when component gets focused
     * @param {Object} evt JS event object 
     */      
    '@focus': function (evt) {},

    /**
     * Emitted when component loses focus
     * @param {Object} evt JS event object 
     */      
    '@blur': function (evt) {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Custom mask or one of the predefined mask names
     * @type {String}
     */
    mask: {
      type: String,
    },
    /**
     * Fills string with specified characters (or underscore if value is not string) to fill mask's length
     * @type {Boolean|String}
     */
    fillMask: {
      type: [Boolean,String],
    },
    /**
     * Fills string from the right side of the mask
     * @type {Boolean}
     */
    reverseFillMask: {
      type: Boolean,
    },
    /**
     * Model will be unmasked (won't contain tokens/separation characters)
     * @type {Boolean}
     */
    unmaskedValue: {
      type: Boolean,
    },
    /**
     * Does field have validation errors?
     * @type {Boolean}
     */
    error: {
      type: Boolean,
    },
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     * @type {String}
     */
    errorMessage: {
      type: String,
    },
    /**
     * Hide error icon when there is an error
     * @type {Boolean}
     */
    noErrorIcon: {
      type: Boolean,
    },
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     * @type {Array}
     */
    rules: {
      type: Array,
    },
    /**
     * Check validation status against the 'rules' only after field loses focus for first time
     * @type {Boolean}
     */
    lazyRules: {
      type: Boolean,
    },
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Label will be always shown above the field regardless of field content (if any)
     * @type {Boolean}
     */
    stackLabel: {
      type: Boolean,
    },
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     * @type {String}
     */
    hint: {
      type: String,
    },
    /**
     * Hide the helper (hint) text when field doesn't have focus
     * @type {Boolean}
     */
    hideHint: {
      type: Boolean,
    },
    /**
     * Prefix
     * @type {String}
     */
    prefix: {
      type: String,
    },
    /**
     * Suffix
     * @type {String}
     */
    suffix: {
      type: String,
    },
    /**
     * Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused
     * @type {String}
     */
    labelColor: {
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
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    bgColor: {
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
     * Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
    },
    /**
     * Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
    },
    /**
     * Custom icon to use for the clear button when using along with 'clearable' prop
     * @type {String}
     */
    clearIcon: {
      type: String,
    },
    /**
     * Use 'filled' design for the field
     * @type {Boolean}
     */
    filled: {
      type: Boolean,
    },
    /**
     * Use 'outlined' design for the field
     * @type {Boolean}
     */
    outlined: {
      type: Boolean,
    },
    /**
     * Use 'borderless' design for the field
     * @type {Boolean}
     */
    borderless: {
      type: Boolean,
    },
    /**
     * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
     * @type {Boolean|String}
     */
    standout: {
      type: [Boolean,String],
    },
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     * @type {Boolean}
     */
    bottomSlots: {
      type: Boolean,
    },
    /**
     * Does not reserves space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content
     * @type {Boolean}
     */
    hideBottomSpace: {
      type: Boolean,
    },
    /**
     * Show an automatic counter on bottom right
     * @type {Boolean}
     */
    counter: {
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
     * Remove border-radius so borders are squared; Overrides 'rounded' prop
     * @type {Boolean}
     */
    square: {
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
     * Match inner content alignment to that of QItem
     * @type {Boolean}
     */
    itemAligned: {
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
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Focus field on initial component render
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
    },
    /**
     * Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well
     * @type {String}
     */
    for: {
      type: String,
    },
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String|Number}
     */
    value: {
      type: [String,Number],
      required: true
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    type: {
      type: String,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="text"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="password"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="textarea"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="email"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="search"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="tel"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="file"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="number"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="url"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="time"': {
      type: Boolean,
    },
    /**
     * Input type
     * @type {'text'|'password'|'textarea'|'email'|'search'|'tel'|'file'|'number'|'url'|'time'|'date'}
     */
    'type="date"': {
      type: Boolean,
    },
    /**
     * Debounce amount (in milliseconds) when updating model
     * @type {String|Number}
     */
    debounce: {
      type: [String,Number],
    },
    /**
     * Specify a max length of model
     * @type {String|Number}
     */
    maxlength: {
      type: [String,Number],
    },
    /**
     * Make field autogrow along with its content (uses a textarea)
     * @type {Boolean}
     */
    autogrow: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the underlying input tag
     * @type {Array|String|Object}
     */
    inputClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the underlying input tag
     * @type {Array|String|Object}
     */
    inputStyle: {
      type: [Array,String,Object],
    }
  }
}
