import { BrowserWindow, screen } from 'electron';
import {resolve} from 'path';

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;
  private static onWindowAllClosed() {
    if (process.platform !== 'darwin')
      Main.application.quit();
  }
  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }
  private static onReady() {
    const {width, height} = screen.getPrimaryDisplay().workAreaSize
    Main.mainWindow =
      new Main.BrowserWindow({ width, height })
      console.log(resolve(__dirname))
    Main.mainWindow
      .loadURL('file://' + __dirname + '/index.html');
    Main.mainWindow.on('closed', Main.onClose);
  }
  static main(
    app: Electron.App,
    browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class1 has no dependencies.  This
    // makes the code easier to write tests for

    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on('window-all-closed',
      Main.onWindowAllClosed);
    Main.application.on('ready',
      Main.onReady);
  }
}