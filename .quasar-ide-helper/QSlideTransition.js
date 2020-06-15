
/**
 * Quasar QSlideTransition component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/slide-transition|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QSlideTransition',
  props: {
    /**
     * Emitted when component show animation is finished

     */      
    '@show': function () {},

    /**
     * Emitted when component hide animation is finished

     */      
    '@hide': function () {},
    /**
     * If set to true, the transition will be applied on the initial render.
     * @type {Boolean}
     */
    appear: {
      type: Boolean,
    },
    /**
     * Duration (in milliseconds) enabling animated scroll.
     * @type {Number}
     */
    duration: {
      type: Number,
    }
  }
}
