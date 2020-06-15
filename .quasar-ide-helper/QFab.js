
/**
 * Quasar QFab component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/fab|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QFab',
  props: {
    /**
     * Emitted when fab actions are shown/hidden; Captured by v-model directive
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@input': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Object} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Object} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-hide': function (evt) {},
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
     * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'input' event
     * @type {Boolean}
     */
    value: {
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
    activeIcon: {
      type: String,
    },
    /**
     * Hide the icon (don't use any)
     * @type {Boolean}
     */
    hideIcon: {
      type: Boolean,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {'up'|'right'|'down'|'left'}
     */
    direction: {
      type: String,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {'up'|'right'|'down'|'left'}
     */
    'direction="up"': {
      type: Boolean,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {'up'|'right'|'down'|'left'}
     */
    'direction="right"': {
      type: Boolean,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {'up'|'right'|'down'|'left'}
     */
    'direction="down"': {
      type: Boolean,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {'up'|'right'|'down'|'left'}
     */
    'direction="left"': {
      type: Boolean,
    },
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down')
     * @type {'left'|'center'|'right'}
     */
    verticalActionsAlign: {
      type: String,
    },
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down')
     * @type {'left'|'center'|'right'}
     */
    'verticalActionsAlign="left"': {
      type: Boolean,
    },
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down')
     * @type {'left'|'center'|'right'}
     */
    'verticalActionsAlign="center"': {
      type: Boolean,
    },
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down')
     * @type {'left'|'center'|'right'}
     */
    'verticalActionsAlign="right"': {
      type: Boolean,
    },
    /**
     * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    }
  }
}
