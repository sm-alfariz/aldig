
/**
 * Quasar QTooltip component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tooltip|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTooltip',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
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
     * Class definitions to be attributed to the content
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the content
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * The maximum height of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximum width of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    maxWidth: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    anchor: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'anchor="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    self: {
      type: String,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the Tooltip's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'center left'|'center middle'|'center right'|'bottom left'|'bottom middle'|'bottom right'}
     */
    'self="bottom right"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    },
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|'(CSS selector)'}
     */
    target: {
      type: [Boolean,String],
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     * @type {Boolean}
     */
    noParentEvent: {
      type: Boolean,
    },
    /**
     * Configure Tooltip to appear with delay
     * @type {Number}
     */
    delay: {
      type: Number,
    },
    /**
     * Configure Tooltip to disappear with delay
     * @type {Number}
     */
    hideDelay: {
      type: Number,
    }
  }
}
