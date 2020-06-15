
/**
 * Quasar QDialog component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/dialog|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QDialog',
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
     * Shakes up the Dialog in order to catch user's attention

     */      
    '@shake': function () {},

    /**
     * Emitted when ESC key is pressed; Does not get emitted if Dialog is 'persistent' or it has 'no-esc-key' set

     */      
    '@escape-key': function () {},
    /**
     * Class definitions to be attributed to the content
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the content
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog if clicking outside of it or hitting ESC key; Also, an app route change won't dismiss it
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noEscDismiss: {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog by clicking outside of it; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noBackdropDismiss: {
      type: Boolean,
    },
    /**
     * Changing route app won't dismiss Dialog; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noRouteDismiss: {
      type: Boolean,
    },
    /**
     * Any click/tap inside of the dialog will close it
     * @type {Boolean}
     */
    autoClose: {
      type: Boolean,
    },
    /**
     * Put Dialog into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too
     * @type {Boolean}
     */
    seamless: {
      type: Boolean,
    },
    /**
     * Put Dialog into maximized mode
     * @type {Boolean}
     */
    maximized: {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same width as the window
     * @type {Boolean}
     */
    fullWidth: {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same height as the window
     * @type {Boolean}
     */
    fullHeight: {
      type: Boolean,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    position: {
      type: String,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    'position="standard"': {
      type: Boolean,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    'position="top"': {
      type: Boolean,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    'position="right"': {
      type: Boolean,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    'position="bottom"': {
      type: Boolean,
    },
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     * @type {'standard'|'top'|'right'|'bottom'|'left'}
     */
    'position="left"': {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    },
    /**
     * Forces content to have squared borders
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * (Accessibility) When Dialog gets hidden, do not refocus on the DOM element that previously had focus
     * @type {Boolean}
     */
    noRefocus: {
      type: Boolean,
    },
    /**
     * (Accessibility) When Dialog gets shown, do not switch focus on it
     * @type {Boolean}
     */
    noFocus: {
      type: Boolean,
    }
  }
}
