
/**
 * Quasar QChatMessage component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/chat-message|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QChatMessage',
  props: {
    /**
     * Render as a sent message (so from current user)
     * @type {Boolean}
     */
    sent: {
      type: Boolean,
    },
    /**
     * Renders a label header/section only
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble background
     * @type {String}
     */
    bgColor: {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble text
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Author's name
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * URL to the avatar image of the author
     * @type {String}
     */
    avatar: {
      type: String,
    },
    /**
     * Array of strings that are the message body. Strings are not sanitized (see details in docs)
     * @type {Array}
     */
    text: {
      type: Array,
    },
    /**
     * Creation timestamp
     * @type {String}
     */
    stamp: {
      type: String,
    },
    /**
     * 1-12 out of 12 (same as col-*)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Force use of textContent instead of innerHTML to render label; Use it when the label might be unsafe (from user input)
     * @type {Boolean}
     */
    labelSanitize: {
      type: Boolean,
    },
    /**
     * Force use of textContent instead of innerHTML to render name; Use it when the name might be unsafe (from user input)
     * @type {Boolean}
     */
    nameSanitize: {
      type: Boolean,
    },
    /**
     * Force use of textContent instead of innerHTML to render text; Use it when the text might be unsafe (from user input)
     * @type {Boolean}
     */
    textSanitize: {
      type: Boolean,
    },
    /**
     * Force use of textContent instead of innerHTML to render stamp; Use it when the stamp might be unsafe (from user input)
     * @type {Boolean}
     */
    stampSanitize: {
      type: Boolean,
    }
  }
}
