
/**
 * Quasar QInfiniteScroll component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/infinite-scroll|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QInfiniteScroll',
  props: {
    /**
     * Emitted when Infinite Scroll needs to load more data
     * @param {Number} index The index parameter can be used to make some sort of pagination on the content you load. It takes numeric values starting with 1 and incrementing with each call 
     * @param {Function} done Function to call when you made all necessary updates. DO NOT forget to call it otherwise your loading message will continue to be displayed 
     */      
    '@load': function (index,done) {},
    /**
     * Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance
     * @type {Number}
     */
    offset: {
      type: Number,
    },
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    debounce: {
      type: [String,Number],
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Scroll area should behave like a messenger - starting scrolled to bottom and loading when reaching the top
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    }
  }
}
