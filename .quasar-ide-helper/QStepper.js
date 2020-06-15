
/**
 * Quasar QStepper component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/stepper|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QStepper',
  props: {
    /**
     * Emitted when the component changes the model; This event _isn't_ fired if the model is changed externally; Is also used by v-model
     * @param {String|Number} value New current panel name 
     */      
    '@input': function (value) {},

    /**
     * Emitted before transitioning to a new panel
     * @param {String|Number} newVal Panel name towards transition is going 
     * @param {String|Number} oldVal Panel name from which transition is happening 
     */      
    '@before-transition': function (newVal,oldVal) {},

    /**
     * Emitted after component transitioned to a new panel
     * @param {String|Number} newVal Panel name towards transition has occurred 
     * @param {String|Number} oldVal Panel name from which transition has happened 
     */      
    '@transition': function (newVal,oldVal) {},
    /**
     * Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     * @type {Boolean}
     */
    keepAlive: {
      type: Boolean,
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    animated: {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    infinite: {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    swipeable: {
      type: Boolean,
    },
    /**
     * Put Stepper in vertical mode (instead of horizontal by default)
     * @type {Boolean}
     */
    vertical: {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionPrev: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionNext: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
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
     * Use alternative labels - stacks the icon on top of the label (applies only to horizontal stepper)
     * @type {Boolean}
     */
    alternativeLabels: {
      type: Boolean,
    },
    /**
     * Allow navigation through the header
     * @type {Boolean}
     */
    headerNav: {
      type: Boolean,
    },
    /**
     * Hide header labels on narrow windows
     * @type {Boolean}
     */
    contracted: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    inactiveIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    inactiveColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    doneIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    doneColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    activeIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    errorIcon: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    errorColor: {
      type: String,
    },
    /**
     * Class definitions to be attributed to the header
     * @type {String}
     */
    headerClass: {
      type: String,
    }
  }
}
