
/**
 * Quasar QForm component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/form|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QForm',
  props: {
    /**
     * Emitted when all validations have passed when tethered to a submit button

     */      
    '@submit': function () {},

    /**
     * Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler

     */      
    '@reset': function () {},

    /**
     * Emitted after a validation was triggered and all inner Quasar components models are valid

     */      
    '@validation-success': function () {},

    /**
     * Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid
     * @param {Object} ref Vue reference to the first component that triggered the validation error 
     */      
    '@validation-error': function (ref) {},
    /**
     * Focus first focusable element on initial component render
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
    },
    /**
     * Do not try to focus on first component that has a validation error when submitting form
     * @type {Boolean}
     */
    noErrorFocus: {
      type: Boolean,
    },
    /**
     * Do not try to focus on first component when resetting form
     * @type {Boolean}
     */
    noResetFocus: {
      type: Boolean,
    },
    /**
     * Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)
     * @type {Boolean}
     */
    greedy: {
      type: Boolean,
    }
  }
}
