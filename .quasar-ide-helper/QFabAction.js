
/**
 * Quasar QFabAction component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/fab-action|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QFabAction',
  props: {
    /**
     * Emitted when user clicks/taps on the component
     * @param {Object} evt JS event object 
     */      
    '@click': function (evt) {},
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    type: {
      type: String,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="a"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="submit"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="button"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="reset"': {
      type: Boolean,
    },
    /**
     * Use 'outline' design for Fab button
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'push' design for Fab button
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Use 'flat' design for Fab button
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
     * Apply the glossy effect over the button
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Display label besides the FABs, as external content
     * @type {Boolean}
     */
    externalLabel: {
      type: Boolean,
    },
    /**
     * The label that will be shown when Fab is extended
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
    },
    /**
     * Position of the label around the icon
     * @type {'top'|'right'|'bottom'|'left'}
     */
    labelPosition: {
      type: String,
    },
    /**
     * Position of the label around the icon
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'labelPosition="top"': {
      type: Boolean,
    },
    /**
     * Position of the label around the icon
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'labelPosition="right"': {
      type: Boolean,
    },
    /**
     * Position of the label around the icon
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'labelPosition="bottom"': {
      type: Boolean,
    },
    /**
     * Position of the label around the icon
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'labelPosition="left"': {
      type: Boolean,
    },
    /**
     * Hide the label; Useful for animation purposes where you toggle the visibility of the label
     * @type {Boolean}
     */
    hideLabel: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the label container
     * @type {Array|String|Object}
     */
    labelClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the label container
     * @type {Array|String|Object}
     */
    labelStyle: {
      type: [Array,String,Object],
    },
    /**
     * Apply a rectangle aspect to the FAB
     * @type {Boolean}
     */
    square: {
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
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab
     * @type {'start'|'center'|'end'}
     */
    anchor: {
      type: String,
    },
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab
     * @type {'start'|'center'|'end'}
     */
    'anchor="start"': {
      type: Boolean,
    },
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab
     * @type {'start'|'center'|'end'}
     */
    'anchor="center"': {
      type: Boolean,
    },
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab
     * @type {'start'|'center'|'end'}
     */
    'anchor="end"': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    }
  }
}
