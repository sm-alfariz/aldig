
/**
 * Quasar QExpansionItem component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/expansion-item|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QExpansionItem',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@input': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Object} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Object} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Object} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted when component show animation is finished

     */      
    '@after-show': function () {},

    /**
     * Emitted when component hide animation is finished

     */      
    '@after-hide': function () {},
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
     * Model of the component defining 'open' state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    expandIcon: {
      type: String,
    },
    /**
     * Expand icon name (following Quasar convention) for when QExpansionItem is expanded; When used, it also disables the rotation animation of the expand icon; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    expandedIcon: {
      type: String,
    },
    /**
     * Apply custom class(es) to the expand icon item section
     * @type {Array|String|Object}
     */
    expandIconClass: {
      type: [Array,String,Object],
    },
    /**
     * Header label (unless using 'header' slot)
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     * @type {Number|String}
     */
    labelLines: {
      type: [Number,String],
    },
    /**
     * Header sub-label (unless using 'header' slot)
     * @type {String}
     */
    caption: {
      type: String,
    },
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     * @type {Number|String}
     */
    captionLines: {
      type: [Number,String],
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
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
     * Animation duration (in milliseconds)
     * @type {Number}
     */
    duration: {
      type: Number,
    },
    /**
     * Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    headerInsetLevel: {
      type: Number,
    },
    /**
     * Apply an inset to content (changes content padding)
     * @type {Number}
     */
    contentInsetLevel: {
      type: Number,
    },
    /**
     * Apply a top and bottom separator when expansion item is opened
     * @type {Boolean}
     */
    expandSeparator: {
      type: Boolean,
    },
    /**
     * Puts expansion item into open state on initial render; Overridden by v-model if used
     * @type {Boolean}
     */
    defaultOpened: {
      type: Boolean,
    },
    /**
     * Applies the expansion events to the expand icon only and not to the whole header
     * @type {Boolean}
     */
    expandIconToggle: {
      type: Boolean,
    },
    /**
     * Switch expand icon side (from default 'right' to 'left')
     * @type {Boolean}
     */
    switchToggleSide: {
      type: Boolean,
    },
    /**
     * Use dense mode for expand icon
     * @type {Boolean}
     */
    denseToggle: {
      type: Boolean,
    },
    /**
     * Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'
     * @type {String}
     */
    group: {
      type: String,
    },
    /**
     * Put expansion list into 'popup' mode
     * @type {Boolean}
     */
    popup: {
      type: Boolean,
    },
    /**
     * Apply custom style to the header
     * @type {Array|String|Object}
     */
    headerStyle: {
      type: [Array,String,Object],
    },
    /**
     * Apply custom class(es) to the header
     * @type {Array|String|Object}
     */
    headerClass: {
      type: [Array,String,Object],
    }
  }
}
