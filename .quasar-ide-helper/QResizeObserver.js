
/**
 * Quasar QResizeObserver component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/resize-observer|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QResizeObserver',
  props: {
    /**
     * Parent element has resized (width or height changed)
     * @param {{height : Number, width : Number}} size New size 
     */      
    '@resize': function (size) {},
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    debounce: {
      type: [String,Number],
    }
  }
}
