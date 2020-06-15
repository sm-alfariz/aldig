
/**
 * Quasar QUploader component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/uploader|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QUploader',
  props: {
    /**
     * Emitted when files are added into the list
     * @param {Array} files Array of files that were added 
     */      
    '@added': function (files) {},

    /**
     * Emitted when files are removed from the list
     * @param {Array} files Array of files that were removed 
     */      
    '@removed': function (files) {},

    /**
     * Started working

     */      
    '@start': function () {},

    /**
     * Finished working (regardless of success or fail)

     */      
    '@finish': function () {},

    /**
     * Emitted when file or batch of files is uploaded
     * @param {{files : Array, xhr : Object}} info Object containing information about the event 
     */      
    '@uploaded': function (info) {},

    /**
     * Emitted when file or batch of files has encountered error while uploading
     * @param {{files : Array, xhr : Object}} info Object containing information about the event 
     */      
    '@failed': function (info) {},

    /**
     * Emitted when file or batch of files started uploading
     * @param {{files : Array, xhr : Object}} info Object containing information about the event 
     */      
    '@uploading': function (info) {},

    /**
     * Emitted when factory function is supplied with a Promise which is rejected
     * @param {Object} err Error Object which is the Promise rejection reason 
     * @param {Array} files Files which were to get uploaded 
     */      
    '@factory-failed': function (err,files) {},
    /**
     * Allow multiple file uploads
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
    },
    /**
     * Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element
     * @type {String}
     */
    accept: {
      type: String,
    },
    /**
     * Maximum size of individual file in bytes
     * @type {Number}
     */
    maxFileSize: {
      type: Number,
    },
    /**
     * Maximum size of all files combined in bytes
     * @type {Number}
     */
    maxTotalSize: {
      type: Number,
    },
    /**
     * Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    filter: {
      type: Function,
    },
    /**
     * Label for the uploader
     * @type {String}
     */
    label: {
      type: String,
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
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
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
     * Don't display thumbnails for image files
     * @type {Boolean}
     */
    noThumbnails: {
      type: Boolean,
    },
    /**
     * Upload files immediately when added
     * @type {Boolean}
     */
    autoUpload: {
      type: Boolean,
    },
    /**
     * Don't show the upload button
     * @type {Boolean}
     */
    hideUploadBtn: {
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
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Function which should return an Object or a Promise resolving with an Object; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    factory: {
      type: Function,
    },
    /**
     * URL or path to the server which handles the upload. Takes String or factory function, which returns String. Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {String|Function}
     */
    url: {
      type: [String,Function],
    },
    /**
     * HTTP method to use for upload; Takes String or factory function which returns a String; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {'POST'|'PUT'}
     */
    method: {
      type: [String,Function],
    },
    /**
     * Field name for each file upload; This goes into the following header: 'Content-Disposition: form-data; name="__HERE__"; filename="somefile.png"; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {String|Function}
     */
    fieldName: {
      type: [String,Function],
    },
    /**
     * Array or a factory function which returns an array; Array consists of objects with header definitions; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Array|Function}
     */
    headers: {
      type: [Array,Function],
    },
    /**
     * Array or a factory function which returns an array; Array consists of objects with additional fields definitions (used by Form to be uploaded); Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Array|Function}
     */
    formFields: {
      type: [Array,Function],
    },
    /**
     * Sets withCredentials to true on the XHR that manages the upload; Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Boolean|Function}
     */
    withCredentials: {
      type: [Boolean,Function],
    },
    /**
     * Send raw files without wrapping into a Form(); Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Boolean|Function}
     */
    sendRaw: {
      type: [Boolean,Function],
    },
    /**
     * Upload files in batch (in one XHR request); Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Boolean|Function}
     */
    batch: {
      type: [Boolean,Function],
    }
  }
}
