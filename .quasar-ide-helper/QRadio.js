
/**
 * Quasar QRadio component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/radio|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QRadio',
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
     * @type {Number|String}
     */
    value: {
      type: [Number,String],
      required: true
    },
    /**
     * The actual value of the option with which model value is changed
     * @type {Number|String}
     */
    val: {
      type: [Number,String],
      required: true
    },
    /**
     * Label to display along the radio control (or use the default slot instead of this prop)
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Label (if any specified) should be displayed on the left side of the checkbox
     * @type {Boolean}
     */
    leftLabel: {
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
     * Should the color (if specified any) be kept when checkbox is unticked?
     * @type {Boolean}
     */
    keepColor: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
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
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    }
  }
}
