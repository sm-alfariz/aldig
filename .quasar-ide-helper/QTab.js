
/**
 * Quasar QTab component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tab|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTab',
  props: {
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * A number or string to label the tab
     * @type {Number|String}
     */
    label: {
      type: [Number,String],
    },
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     * @type {Boolean|String}
     */
    alert: {
      type: [Boolean,String],
    },
    /**
     * Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop
     * @type {String}
     */
    alertIcon: {
      type: String,
    },
    /**
     * Panel name
     * @type {Number|String}
     */
    name: {
      type: [Number,String],
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    }
  }
}
