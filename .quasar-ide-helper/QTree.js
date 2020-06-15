
/**
 * Quasar QTree component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tree|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTree',
  props: {
    /**
     * Triggered when nodes are expanded or collapsed; Used by Vue on 'update' synched prop
     * @param {Array} expanded The expanded node keys 
     */      
    '@update:expanded': function (expanded) {},

    /**
     * Emitted when the lazy loading of nodes is finished
     * @param {{node : Object, key : String, done : Function, fail : Function}} details Lazy loading details 
     */      
    '@lazy-load': function (details) {},

    /**
     * Emitted when nodes are ticked/unticked via the checkbox; Used by Vue on 'ticked' synched prop
     * @param {Array} target The ticked node keys 
     */      
    '@update:ticked': function (target) {},

    /**
     * Emitted when selected node changes; Used by Vue on 'selected' synched prop
     * @param {*} target The selected node key 
     */      
    '@update:selected': function (target) {},

    /**
     * Emitted when component show animation is finished

     */      
    '@after-show': function () {},

    /**
     * Emitted when component hide animation is finished

     */      
    '@after-hide': function () {},
    /**
     * The array of nodes that designates the tree structure
     * @type {Array}
     */
    nodes: {
      type: Array,
      required: true
    },
    /**
     * The property name of each node object that holds a unique node id
     * @type {String}
     */
    nodeKey: {
      type: String,
      required: true
    },
    /**
     * The property name of each node object that holds the label of the node
     * @type {String}
     */
    labelKey: {
      type: String,
    },
    /**
     * Do not display the connector lines between nodes
     * @type {Boolean}
     */
    noConnectors: {
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
     * Color name for controls (like checkboxes) from the Quasar Color Palette
     * @type {String}
     */
    controlColor: {
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
     * Color name for selected nodes (from the Quasar Color Palette)
     * @type {String}
     */
    selectedColor: {
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
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {'none'|'strict'|'leaf'|'leaf-filtered'}
     */
    tickStrategy: {
      type: String,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {'none'|'strict'|'leaf'|'leaf-filtered'}
     */
    'tickStrategy="none"': {
      type: Boolean,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {'none'|'strict'|'leaf'|'leaf-filtered'}
     */
    'tickStrategy="strict"': {
      type: Boolean,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {'none'|'strict'|'leaf'|'leaf-filtered'}
     */
    'tickStrategy="leaf"': {
      type: Boolean,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {'none'|'strict'|'leaf'|'leaf-filtered'}
     */
    'tickStrategy="leafFiltered"': {
      type: Boolean,
    },
    /**
     * Keys of nodes that are ticked
     * @type {Array}
     */
    ticked: {
      type: Array,
    },
    /**
     * Keys of nodes that are expanded
     * @type {Array}
     */
    expanded: {
      type: Array,
    },
    /**
     * Key of node currently selected
     * @type {*}
     */
    selected: {
    },
    /**
     * Allow the tree to have all its branches expanded, when first rendered
     * @type {Boolean}
     */
    defaultExpandAll: {
      type: Boolean,
    },
    /**
     * Allows the tree to be set in accordion mode
     * @type {Boolean}
     */
    accordion: {
      type: Boolean,
    },
    /**
     * The text value to be used for filtering nodes
     * @type {String}
     */
    filter: {
      type: String,
    },
    /**
     * The function to use to filter the tree nodes; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    filterMethod: {
      type: Function,
    },
    /**
     * Toggle animation duration (in milliseconds)
     * @type {Number}
     */
    duration: {
      type: Number,
    },
    /**
     * Override default such label for when no nodes are available
     * @type {String}
     */
    noNodesLabel: {
      type: String,
    },
    /**
     * Override default such label for when no nodes are available due to filtering
     * @type {String}
     */
    noResultsLabel: {
      type: String,
    }
  }
}
