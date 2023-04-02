const { app, dialog, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 400,

        // Attach preload.js to main.js
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    // Setup handle listener before loading the HTML file so that the handler is
    // guaranteed to be ready before you send out the invoke call from the renderer.
    ipcMain.handle("ping", () => {
        console.log("Hello, IPC Main")
        return "pong"
    })

    window.loadFile("view/index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit()
    }
})
