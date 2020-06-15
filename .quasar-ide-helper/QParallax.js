
/**
 * Quasar QParallax component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/parallax|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QParallax',
  props: {
    /**
     * Emitted when scrolling occurs
     * @param {Number} percentage Number between 0.0 and 1.0 defining the scrolled percentage of the component 
     */      
    '@scroll': function (percentage) {},
    /**
     * Path to image (unless a 'media' slot is used)
     * @type {String}
     */
    src: {
      type: String,
    },
    /**
     * Height of component (in pixels)
     * @type {Number}
     */
    height: {
      type: Number,
    },
    /**
     * Speed of parallax effect (0.0 < x < 1.0)
     * @type {Number}
     */
    speed: {
      type: Number,
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
