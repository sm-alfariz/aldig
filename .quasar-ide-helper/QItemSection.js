
/**
 * Quasar QItemSection component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/item-section|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QItemSection',
  props: {
    /**
     * Render an avatar item side (does not needs 'side' prop to be set)
     * @type {Boolean}
     */
    avatar: {
      type: Boolean,
    },
    /**
     * Render a thumbnail item side (does not needs 'side' prop to be set)
     * @type {Boolean}
     */
    thumbnail: {
      type: Boolean,
    },
    /**
     * Renders as a side of the item
     * @type {Boolean}
     */
    side: {
      type: Boolean,
    },
    /**
     * Align content to top (useful for multi-line items)
     * @type {Boolean}
     */
    top: {
      type: Boolean,
    },
    /**
     * Do not wrap text (useful for item's main content)
     * @type {Boolean}
     */
    noWrap: {
      type: Boolean,
    }
  }
}
