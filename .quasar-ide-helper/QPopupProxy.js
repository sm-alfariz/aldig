
/**
 * Quasar QPopupProxy component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/popup-proxy|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPopupProxy',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@input': function (value) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered show()
     * @param {Object} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Object} evt JS event object 
     */      
    '@hide': function (evt) {},
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|'(CSS selector)'|'(DOM Element)'}
     */
    target: {
      type: [Boolean,String,Element],
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     * @type {Boolean}
     */
    noParentEvent: {
      type: Boolean,
    },
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     * @type {Boolean}
     */
    contextMenu: {
      type: Boolean,
    },
    /**
     * Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Breakpoint (in pixels) of window width/height (whichever is smaller) from where a Menu will get to be used instead of a Dialog
     * @type {Number|String}
     */
    breakpoint: {
      type: [Number,String],
    }
  }
}
