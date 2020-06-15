
/**
 * Quasar QScrollObserver component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/scroll-observer|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QScrollObserver',
  props: {
    /**
     * Emitted when scroll position changes
     * @param {{position : Number, direction : 'up'|'down', directionChanged : Boolean, inflexionPosition : Number}} details Scroll details 
     */      
    '@scroll': function (details) {},
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    debounce: {
      type: [String,Number],
    },
    /**
     * Register for horizontal scroll instead of vertical (which is default)
     * @type {Boolean}
     */
    horizontal: {
      type: Boolean,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    }
  }
}
