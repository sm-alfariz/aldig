
/**
 * Quasar QTd component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/td|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTd',
  props: {
    /**
     * QTable's column scoped slot property
     * @type {Object}
     */
    props: {
      type: Object,
    },
    /**
     * Tries to shrink column width size; Useful for columns with a checkbox/radio/toggle
     * @type {Boolean}
     */
    autoWidth: {
      type: Boolean,
    },
    /**
     * Disable hover effect
     * @type {Boolean}
     */
    noHover: {
      type: Boolean,
    }
  }
}
