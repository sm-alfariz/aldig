
/**
 * Quasar QTabPanel component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tab-panel|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTabPanel',
  props: {
    /**
     * Panel name
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
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
