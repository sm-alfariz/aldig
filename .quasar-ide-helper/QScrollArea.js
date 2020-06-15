
/**
 * Quasar QScrollArea component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/scroll-area|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QScrollArea',
  props: {
    /**
     * Emitted when scroll information changes (and listener is configured)
     * @param {{ref : Object, verticalPosition : Number, verticalPercentage : Number, verticalSize : Number, verticalContainerSize : Number, horizontalPosition : Number, horizontalPercentage : Number, horizontalSize : Number, horizontalContainerSize : Number}} info undefined 
     */      
    '@scroll': function (info) {},
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Object with CSS properties and values for styling the custom scrollbar
     * @type {Array|String|Object}
     */
    barStyle: {
      type: [Array,String,Object],
    },
    /**
     * Object with CSS properties and values for styling the thumb of custom scrollbar
     * @type {Object}
     */
    thumbStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)
     * @type {Array|String|Object}
     */
    contentActiveStyle: {
      type: [Array,String,Object],
    },
    /**
     * (Desktop only) Manually control the visibility of the scrollbar; Overrides default mouse over/leave behavior
     * @type {Boolean}
     */
    visible: {
      type: Boolean,
    },
    /**
     * When content changes, the scrollbar appears; this delay defines the amount of time (in milliseconds) before scrollbars disappear again (if component is not hovered)
     * @type {Number|String}
     */
    delay: {
      type: [Number,String],
    },
    /**
     * Register for horizontal scroll instead of vertical (which is default)
     * @type {Boolean}
     */
    horizontal: {
      type: Boolean,
    }
  }
}
