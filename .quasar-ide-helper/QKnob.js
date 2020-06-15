
/**
 * Quasar QKnob component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/knob|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QKnob',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {Number} value New model value 
     */      
    '@input': function (value) {},

    /**
     * Fires at the end of a knob's adjustment and offers the value of the model
     * @param {Number} value New model value 
     */      
    '@change': function (value) {},

    /**
     * The value of the model while dragging is still in progress
     * @param {Number} value New model value 
     */      
    '@drag-value': function (value) {},
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
     * Any number to indicate the given value of the knob. Either use this property (along with a listener for 'input' event) OR use the v-model directive
     * @type {Number}
     */
    value: {
      type: Number,
    },
    /**
     * The minimum value that the model (the knob value) should start at
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * The maximum value that the model (the knob value) should go to
     * @type {Number}
     */
    max: {
      type: Number,
    },
    /**
     * A number representing steps in the value of the model, while adjusting the knob
     * @type {Number}
     */
    step: {
      type: Number,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Color name for the center part of the component from the Quasar Color Palette
     * @type {String}
     */
    centerColor: {
      type: String,
    },
    /**
     * Color name for the track of the component from the Quasar Color Palette
     * @type {String}
     */
    trackColor: {
      type: String,
    },
    /**
     * Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
     * @type {String}
     */
    fontSize: {
      type: String,
    },
    /**
     * Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
     * @type {Number}
     */
    thickness: {
      type: Number,
    },
    /**
     * Angle to rotate progress arc by
     * @type {Number}
     */
    angle: {
      type: Number,
    },
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     * @type {Boolean}
     */
    showValue: {
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
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    }
  }
}
