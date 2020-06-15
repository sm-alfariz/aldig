
/**
 * Quasar QCircularProgress component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/circular-progress|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QCircularProgress',
  props: {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Current progress (must be between min/max)
     * @type {Number}
     */
    value: {
      type: Number,
    },
    /**
     * Minimum value defining 'no progress' (must be lower than 'max')
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * Maximum value defining 100% progress made (must be higher than 'min')
     * @type {Number}
     */
    max: {
      type: Number,
    },
    /**
     * Color name for the arc progress from the Quasar Color Palette
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
     * Put component into 'indeterminate' state; Ignores 'value' prop
     * @type {Boolean}
     */
    indeterminate: {
      type: Boolean,
    },
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     * @type {Boolean}
     */
    showValue: {
      type: Boolean,
    },
    /**
     * Reverses the direction of progress; Only for determined state
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    }
  }
}
