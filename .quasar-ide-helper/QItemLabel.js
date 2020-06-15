
/**
 * Quasar QItemLabel component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/item-label|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QItemLabel',
  props: {
    /**
     * Renders an overline label
     * @type {Boolean}
     */
    overline: {
      type: Boolean,
    },
    /**
     * Renders a caption label
     * @type {Boolean}
     */
    caption: {
      type: Boolean,
    },
    /**
     * Renders a header label
     * @type {Boolean}
     */
    header: {
      type: Boolean,
    },
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     * @type {Number|String}
     */
    lines: {
      type: [Number,String],
    }
  }
}
