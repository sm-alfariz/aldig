
/**
 * Quasar QVideo component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/video|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QVideo',
  props: {
    /**
     * Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')
     * @type {String|Number}
     */
    ratio: {
      type: [String,Number],
    },
    /**
     * The source url to display in an iframe
     * @type {String}
     */
    src: {
      type: String,
      required: true
    }
  }
}
