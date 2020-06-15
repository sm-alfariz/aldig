
/**
 * Quasar QNoSsr component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/no-ssr|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QNoSsr',
  props: {
    /**
     * HTML tag to render
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Text to display on server-side render (unless using 'placeholder' slot)
     * @type {String}
     */
    placeholder: {
      type: String,
    }
  }
}
