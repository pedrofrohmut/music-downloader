const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 400,
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
