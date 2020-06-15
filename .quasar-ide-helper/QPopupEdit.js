
/**
 * Quasar QPopupEdit component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/popup-edit|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPopupEdit',
  props: {
    /**
     * Emitted when Popup gets cancelled in order to reset model to its initial value; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@input': function (value) {},

    /**
     * Emitted right before Popup gets shown
     * @param {Object} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted right after Popup gets shown

     */      
    '@show': function () {},

    /**
     * Emitted right before Popup gets dismissed
     * @param {Object} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted right after Popup gets dismissed

     */      
    '@hide': function () {},

    /**
     * Emitted when value has been successfully validated and it should be saved
     * @param {*} value Validated value to be saved 
     * @param {*} initialValue Initial value, before changes 
     */      
    '@save': function (value,initialValue) {},

    /**
     * Emitted when user cancelled the change (hit ESC key or clicking outside of Popup or hit 'Cancel' button)
     * @param {*} value Edited value 
     * @param {*} initialValue Initial value, before changes 
     */      
    '@cancel': function (value,initialValue) {},
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Automatically save the model (if changed) when user clicks/taps outside of the popup; It does not apply to ESC key
     * @type {Boolean}
     */
    autoSave: {
      type: Boolean,
    },
    /**
     * Optional title (unless 'title' slot is used)
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Show Set and Cancel buttons
     * @type {Boolean}
     */
    buttons: {
      type: Boolean,
    },
    /**
     * Override Set button label
     * @type {String}
     */
    labelSet: {
      type: String,
    },
    /**
     * Override Cancel button label
     * @type {String}
     */
    labelCancel: {
      type: String,
    },
    /**
     * Class definitions to be attributed to the content
     * @type {String}
     */
    contentClass: {
      type: String,
    },
    /**
     * Style definitions to be attributed to the content
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Validates model then triggers 'save' and closes Popup; Returns a Boolean ('true' means valid, 'false' means abort); Syntax: validate(value); For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    validate: {
      type: Function,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Allows the menu to match at least the full width of its target
     * @type {Boolean}
     */
    fit: {
      type: Boolean,
    },
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    anchor: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    self: {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom right"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     * @type {Boolean}
     */
    touchPosition: {
      type: Boolean,
    },
    /**
     * Avoid menu closing by hitting ESC key or by clicking/tapping outside of the Popup
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)
     * @type {Boolean}
     */
    separateClosePopup: {
      type: Boolean,
    },
    /**
     * Forces menu to have squared borders
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * The maximum height of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximum width of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxWidth: {
      type: String,
    }
  }
}
