
/**
 * Quasar QItem component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/item|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QItem',
  props: {
    /**
     * HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    exact: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    append: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    exactActiveClass: {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put item into 'active' state
     * @type {Boolean}
     */
    active: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events
     * @type {Boolean}
     */
    clickable: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    insetLevel: {
      type: Number,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states
     * @type {Boolean}
     */
    manualFocus: {
      type: Boolean,
    },
    /**
     * Determines focus state, ONLY if 'manual-focus' is enabled / set to true
     * @type {Boolean}
     */
    focused: {
      type: Boolean,
    }
  }
}
