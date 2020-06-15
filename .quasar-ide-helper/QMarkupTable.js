
/**
 * Quasar QMarkupTable component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/markup-table|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QMarkupTable',
  props: {
    /**
     * Dense mode; occupies less space
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
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
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
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    separator: {
      type: String,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="horizontal"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="vertical"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="cell"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="none"': {
      type: Boolean,
    },
    /**
     * Wrap text within table cells
     * @type {Boolean}
     */
    wrapCells: {
      type: Boolean,
    }
  }
}
