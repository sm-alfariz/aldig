
/**
 * Quasar QLayout component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/layout|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QLayout',
  props: {
    /**
     * Emitted when layout size (height, width) changes
     * @param {{height : Number, width : Number}} size New size 
     */      
    '@resize': function (size) {},

    /**
     * Emitted when user scrolls within layout
     * @param {{position : Number, direction : 'up'|'down', directionChanged : Boolean, inflexionPosition : Number}} details Scroll details 
     */      
    '@scroll': function (details) {},

    /**
     * Emitted when the scroll size of layout changes
     * @param {Number} height New scroll height of layout 
     */      
    '@scroll-height': function (height) {},
    /**
     * Defines how your layout components (header/footer/drawer) should be placed on screen; See docs examples
     * @type {String}
     */
    view: {
      type: String,
    },
    /**
     * Containerize the layout which means it changes the default behavior of expanding to the whole window; Useful (but not limited to) for when using on a QDialog
     * @type {Boolean}
     */
    container: {
      type: Boolean,
    }
  }
}
