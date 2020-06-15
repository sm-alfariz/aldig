
/**
 * Quasar QEditor component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/editor|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QEditor',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String} value The pure HTML of the content 
     */      
    '@input': function (value) {},
    /**
     * Fullscreen mode
     * @type {Boolean}
     */
    fullscreen: {
      type: Boolean,
    },
    /**
     * Changing route app won't exit fullscreen
     * @type {Boolean}
     */
    noRouteFullscreenExit: {
      type: Boolean,
    },
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    value: {
      type: String,
      required: true
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no borders)
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Dense mode; toolbar buttons are shown on one-line only
     * @type {Boolean}
     */
    dense: {
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
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * CSS unit for the minimum height of the editable area
     * @type {String}
     */
    minHeight: {
      type: String,
    },
    /**
     * CSS unit for maximum height of the input area
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * CSS value to set the height of the editable area
     * @type {String}
     */
    height: {
      type: String,
    },
    /**
     * Definition of commands and their buttons to be included in the 'toolbar' prop
     * @type {{label : String, tip : String, htmlTip : String, icon : String, key : Number, handler : Function, cmd : String, param : String|Function, disable : Boolean|Function, type : |'no-state'}}
     */
    definitions: {
      type: Object,
    },
    /**
     * Object with definitions of fonts
     * @type {Object}
     */
    fonts: {
      type: Object,
    },
    /**
     * An array of arrays of Objects/Strings that you use to define the construction of the elements and commands available in the toolbar
     * @type {Array}
     */
    toolbar: {
      type: Array,
    },
    /**
     * Font color (from the Quasar Palette) of buttons and text in the toolbar
     * @type {String}
     */
    toolbarColor: {
      type: String,
    },
    /**
     * Text color (from the Quasar Palette) of toolbar commands
     * @type {String}
     */
    toolbarTextColor: {
      type: String,
    },
    /**
     * Choose the active color (from the Quasar Palette) of toolbar commands button
     * @type {String}
     */
    toolbarToggleColor: {
      type: String,
    },
    /**
     * Toolbar background color (from Quasar Palette)
     * @type {String}
     */
    toolbarBg: {
      type: String,
    },
    /**
     * Toolbar buttons are rendered "outlined"
     * @type {Boolean}
     */
    toolbarOutline: {
      type: Boolean,
    },
    /**
     * Toolbar buttons are rendered as a "push-button" type
     * @type {Boolean}
     */
    toolbarPush: {
      type: Boolean,
    },
    /**
     * Toolbar buttons are rendered "rounded"
     * @type {Boolean}
     */
    toolbarRounded: {
      type: Boolean,
    },
    /**
     * Object with CSS properties and values for styling the container of QEditor
     * @type {Object}
     */
    contentStyle: {
      type: Object,
    },
    /**
     * CSS classes for the input area
     * @type {Object|Array|String}
     */
    contentClass: {
      type: [Object,Array,String],
    },
    /**
     * Text to display as placeholder
     * @type {String}
     */
    placeholder: {
      type: String,
    }
  }
}
