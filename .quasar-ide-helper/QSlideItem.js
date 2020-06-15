
/**
 * Quasar QSlideItem component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/slide-item|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QSlideItem',
  props: {
    /**
     * Emitted when user finished sliding the item to the left
     * @param {{reset : Function}} details Details 
     */      
    '@left': function (details) {},

    /**
     * Emitted when user finished sliding the item to the right
     * @param {{reset : Function}} details Details 
     */      
    '@right': function (details) {},

    /**
     * Emitted when user finished sliding the item up
     * @param {{reset : Function}} details Details 
     */      
    '@top': function (details) {},

    /**
     * Emitted when user finished sliding the item down
     * @param {{reset : Function}} details Details 
     */      
    '@bottom': function (details) {},

    /**
     * Emitted when user finished sliding the item to either sides
     * @param {{side : 'left'|'right'|'top'|'bottom', reset : Function}} details Details 
     */      
    '@action': function (details) {},
    /**
     * Color name for left-side background from the Quasar Color Palette
     * @type {String}
     */
    leftColor: {
      type: String,
    },
    /**
     * Color name for right-side background from the Quasar Color Palette
     * @type {String}
     */
    rightColor: {
      type: String,
    },
    /**
     * Color name for top-side background from the Quasar Color Palette
     * @type {String}
     */
    topColor: {
      type: String,
    },
    /**
     * Color name for bottom-side background from the Quasar Color Palette
     * @type {String}
     */
    bottomColor: {
      type: String,
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
