import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for lin26/jupyterlab_bukalapak
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@lin26/jupyterlab_bukalapak:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@lin26/jupyterlab_bukalapak/index.css';

    manager.register({
      name: 'JupyterLab Bukalapak',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
