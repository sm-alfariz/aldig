
/**
 * Quasar QBtn component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/btn|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBtn',
  props: {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    type: {
      type: String,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="a"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="submit"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="button"': {
      type: Boolean,
    },
    /**
     * Define the button HTML DOM type
     * @type {'a'|'submit'|'button'|'reset'}
     */
    'type="reset"': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * The text that will be shown on the button
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
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
    iconRight: {
      type: String,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    unelevated: {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a Floating Action Button
     * @type {Boolean}
     */
    fab: {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a small Floating Action Button
     * @type {Boolean}
     */
    fabMini: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    noWrap: {
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
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    align: {
      type: String,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="left"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="right"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="center"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="around"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="between"': {
      type: Boolean,
    },
    /**
     * Label or content alignment
     * @type {'left'|'right'|'center'|'around'|'between'|'evenly'}
     */
    'align="evenly"': {
      type: Boolean,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    stack: {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    stretch: {
      type: Boolean,
    },
    /**
     * Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)
     * @type {Boolean}
     */
    loading: {
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
     * Makes a circle shaped button
     * @type {Boolean}
     */
    round: {
      type: Boolean,
    },
    /**
     * Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background
     * @type {Number}
     */
    percentage: {
      type: Number,
    },
    /**
     * Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props
     * @type {Boolean}
     */
    darkPercentage: {
      type: Boolean,
    }
  }
}
