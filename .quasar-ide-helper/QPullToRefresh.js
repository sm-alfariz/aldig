
/**
 * Quasar QPullToRefresh component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/pull-to-refresh|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPullToRefresh',
  props: {
    /**
     * Called whenever a refresh is triggered; at this time, your function should load more data
     * @param {Function} done Call the done() function when your data has been refreshed 
     */      
    '@refresh': function (done) {},
    /**
     * Color name for the icon from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Color name for background of the icon container from the Quasar Color Palette
     * @type {String}
     */
    bgColor: {
      type: String,
    },
    /**
     * Icon to display when refreshing the content
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Don't listen for mouse events
     * @type {Boolean}
     */
    noMouse: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    }
  }
}
