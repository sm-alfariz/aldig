
/**
 * Quasar QBtnToggle component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/btn-toggle|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBtnToggle',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@input': function (value) {},

    /**
     * When using the 'clearable' property, this event is emitted when the already selected button is clicked

     */      
    '@clear': function () {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Array of Objects defining each option
     * @type {Array}
     */
    options: {
      type: Array,
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
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    toggleColor: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    toggleTextColor: {
      type: String,
    },
    /**
     * Spread horizontally to all available space
     * @type {Boolean}
     */
    spread: {
      type: Boolean,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    unelevated: {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Button size name or a CSS unit including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    noWrap: {
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
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    stack: {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    stretch: {
      type: Boolean,
    },
    /**
     * Clears model on click of the already selected button
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
    }
  }
}
