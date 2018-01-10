import {app, BrowserWindow} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
let subpy;
let apiURL = 'http://localhost:5000';

const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    // spawns flask instance
    let testURL = "C:\\Users\\Maciej\\Documents\\SideProjects\\JavaScript\\my-project\\src\\python\\api.py";
    subpy = require('child_process').spawn('python', [testURL]);
    // console.log(__dirname + '/src/python/api.py');
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 900,
        useContentSize: true,
        width: 1500
    })

    mainWindow.loadURL(winURL)


    mainWindow.on('closed', () => {
        mainWindow = null
    })
    // require('request-promise')(apiURL).then(function () {
    //
    // })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
 import { autoUpdater } from 'electron-updater'

 autoUpdater.on('update-downloaded', () => {
 autoUpdater.quitAndInstall()
 })

 app.on('ready', () => {
 if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
 })
 */
