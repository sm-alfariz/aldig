
/**
 * Quasar QCarouselSlide component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/carousel-slide|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QCarouselSlide',
  props: {
    /**
     * Slide name
     * @type {*}
     */
    name: {
      required: true
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * URL pointing to a slide background image (use statics folder)
     * @type {String}
     */
    imgSrc: {
      type: String,
    }
  }
}
