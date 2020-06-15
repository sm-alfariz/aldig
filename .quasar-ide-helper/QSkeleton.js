
/**
 * Quasar QSkeleton component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/skeleton|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QSkeleton',
  props: {
    /**
     * HTML tag to render
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    type: {
      type: String,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="text"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="rect"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="circle"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QBtn"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QBadge"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QChip"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QToolbar"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QCheckbox"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QRadio"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QToggle"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QSlider"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QRange"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QInput"': {
      type: Boolean,
    },
    /**
     * Type of skeleton placeholder
     * @type {'text'|'rect'|'circle'|'QBtn'|'QBadge'|'QChip'|'QToolbar'|'QCheckbox'|'QRadio'|'QToggle'|'QSlider'|'QRange'|'QInput'|'QAvatar'}
     */
    'type="QAvatar"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    animation: {
      type: String,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="wave"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="pulse"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="pulseX"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="pulseY"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="fade"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="blink"': {
      type: Boolean,
    },
    /**
     * The animation effect of the skeleton placeholder
     * @type {'wave'|'pulse'|'pulse-x'|'pulse-y'|'fade'|'blink'|'none'}
     */
    'animation="none"': {
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
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Size in CSS units, including unit name; Overrides 'height' and 'width' props and applies the value to both height and width
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Width in CSS units, including unit name; Apply custom width; Use this prop or through CSS; Overridden by 'size' prop if used
     * @type {String}
     */
    width: {
      type: String,
    },
    /**
     * Height in CSS units, including unit name; Apply custom height; Use this prop or through CSS; Overridden by 'size' prop if used
     * @type {String}
     */
    height: {
      type: String,
    }
  }
}
