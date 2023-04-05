
// A preload script contains code that runs before your web page is loaded into
// the browser window. It has access to both DOM APIs and Node.js environment

// Electron apps often use the preload script to set up inter-process
// communication (IPC) interfaces to pass arbitrary messages between the two
// kinds of processes

const { contextBridge, ipcRenderer } = require("electron")

/*

    IPC SECURITY

    Notice how we wrap the ipcRenderer.invoke('ping') call in a helper function
    rather than expose the ipcRenderer module directly via context bridge. You
    never want to directly expose the entire ipcRenderer module via preload.
    This would give your renderer the ability to send arbitrary IPC messages to
    the main process, which becomes a powerful attack vector for malicious code.

    source: https://www.electronjs.org/docs/latest/tutorial/tutorial-preload

    */

contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,

    ping: () => ipcRenderer.invoke("ping"),

    download: () => ipcRenderer.invoke("download"),

    // We can also expose variables, not just functions
})
