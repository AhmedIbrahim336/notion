const { app, BrowserWindow } = require("electron");

// Enable hot-reloading in development
if (process.env.NODE_ENV === "development") {
  require("electron-reload")(__dirname);
}

const createWindow = () => {
  win = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:3000");

  if (process.env.NODE_ENV === "development") {
    win.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  createWindow();
});
