
/**
 * Quasar QFooter component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/footer|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QFooter',
  props: {
    /**
     * Emitted when 'reveal' state gets changed
     * @param {Boolean} value New 'reveal' state 
     */      
    '@reveal': function (value) {},
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide footer
     * @type {Boolean}
     */
    reveal: {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the footer
     * @type {Boolean}
     */
    elevated: {
      type: Boolean,
    },
    /**
     * When using SSR, you can optionally hint of the height (in pixels) of the QFooter
     * @type {Number|String }
     */
    heightHint: {
      type: [Number,String ],
    }
  }
}
