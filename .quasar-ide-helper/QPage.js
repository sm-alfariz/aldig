
/**
 * Quasar QPage component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/page|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPage',
  props: {
    /**
     * Applies a default responsive page padding
     * @type {Boolean}
     */
    padding: {
      type: Boolean,
    },
    /**
     * Override default CSS style applied to the component (sets minHeight); Function(offset: Number) => CSS props/value: Object; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    styleFn: {
      type: Function,
    }
  }
}
