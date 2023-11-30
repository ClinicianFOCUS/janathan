/**
 * Execute a plugin module function in main process
 *
 * @param     plugin     plugin name to import
 * @param     method     function name to execute
 * @param     args       arguments to pass to the function
 * @returns   Promise<any>
 *
 */
const executeOnMain: (
  plugin: string,
  method: string,
  ...args: any[]
) => Promise<any> = (plugin, method, ...args) =>
  window.coreAPI?.invokePluginFunc(plugin, method, ...args)

/**
 * Downloads a file from a URL and saves it to the local file system.
 * @param {string} url - The URL of the file to download.
 * @param {string} fileName - The name to use for the downloaded file.
 * @returns {Promise<any>} A promise that resolves when the file is downloaded.
 */
const downloadFile: (url: string, fileName: string) => Promise<any> = (
  url,
  fileName
) => window.coreAPI?.downloadFile(url, fileName);

/**
 * Aborts the download of a specific file.
 * @param {string} fileName - The name of the file whose download is to be aborted.
 * @returns {Promise<any>} A promise that resolves when the download has been aborted.
 */
const abortDownload: (fileName: string) => Promise<any> = (fileName) =>
  window.coreAPI?.abortDownload(fileName);

/**
 * Retrieves the path to the app data directory using the `coreAPI` object.
 * If the `coreAPI` object is not available, the function returns `undefined`.
 * @returns A Promise that resolves with the path to the app data directory, or `undefined` if the `coreAPI` object is not available.
 */
const appDataPath: () => Promise<any> = () => window.coreAPI?.appDataPath();

/**
 * Gets the user space path.
 * @returns {Promise<any>} A Promise that resolves with the user space path.
 */
const getUserSpace = (): Promise<string> => window.coreAPI?.getUserSpace();

/**
 * Opens the file explorer at a specific path.
 * @param {string} path - The path to open in the file explorer.
 * @returns {Promise<any>} A promise that resolves when the file explorer is opened.
 */
const openFileExplorer: (path: string) => Promise<any> = (path) =>
  window.coreAPI?.openFileExplorer(path);

/**
 * Register extension point function type definition
 */
export type RegisterExtensionPoint = (
  extensionName: string,
  extensionId: string,
  method: Function,
  priority?: number
) => void;

/**
 * Functions exports
 */
export {
  executeOnMain,
  downloadFile,
  abortDownload,
  appDataPath,
  getUserSpace,
  openFileExplorer,
};
