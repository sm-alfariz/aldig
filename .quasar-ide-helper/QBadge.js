
/**
 * Quasar QBadge component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/badge|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBadge',
  props: {
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
     * Tell QBadge if it should float to the top right side of the relative positioned parent element or not
     * @type {Boolean}
     */
    floating: {
      type: Boolean,
    },
    /**
     * Applies a 0.8 opacity; Useful especially for floating QBadge
     * @type {Boolean}
     */
    transparent: {
      type: Boolean,
    },
    /**
     * Content can wrap to multiple lines
     * @type {Boolean}
     */
    multiLine: {
      type: Boolean,
    },
    /**
     * Badge's content as string; overrides default slot if specified
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
    },
    /**
     * Sets vertical-align CSS prop
     * @type {'top'|'middle'|'bottom'}
     */
    align: {
      type: String,
    },
    /**
     * Sets vertical-align CSS prop
     * @type {'top'|'middle'|'bottom'}
     */
    'align="top"': {
      type: Boolean,
    },
    /**
     * Sets vertical-align CSS prop
     * @type {'top'|'middle'|'bottom'}
     */
    'align="middle"': {
      type: Boolean,
    },
    /**
     * Sets vertical-align CSS prop
     * @type {'top'|'middle'|'bottom'}
     */
    'align="bottom"': {
      type: Boolean,
    },
    /**
     * Use 'outline' design (colored text and borders only)
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    }
  }
}
