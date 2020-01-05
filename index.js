// app모듈과, BrowserWindow 모듈 할당
const {app, BrowserWindow, shell, Menu} = require('electron');
let win;



app.on('ready', () =>{
    win = new BrowserWindow(
        {
           show: false
            , icon: __dirname + '/resources/installer/Icon.ico'
            , webPreferences :{ defaultFontSize : 14}
        }
    );

    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    role: 'quit'
                },
            ]
        },
        {
            label: 'Edit',
            submenu: [
              {
                role: 'undo'
              },
              {
                role: 'redo'
              },
              {
                type: 'separator'
              },
              {
                role: 'cut'
              },
              {
                role: 'copy'
              },
              {
                role: 'paste'
              },
              {
                role: 'pasteandmatchstyle'
              },
              {
                role: 'delete'
              },
              {
                role: 'selectall'
              }
            ]
        },
        {
            label: 'Edit',
            submenu: [
              {
                role: 'reload'
              },
              {
                role: 'forceReload'
              },
              {
                role: 'toggleDevTools'
              }
            ]
        },
        {
            label: 'Hong\'s',
            submenu: [
                {
                    label : 'Blog',
                    click : function() {
                        shell.openExternal('https://gmm117.github.io/');
                    }
                }, 
                {
                    label : 'PortFolio',
                    click : function() {
                        shell.openExternal('https://gmm117.github.io/portfolio/');
                    }
                },
                {
                    label : 'GitHub',
                    click : function() {
                        shell.openExternal('https://github.com/gmm117/MarkdownEditor');
                    }
                }
                    
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    // 창이 ready 상태가되면 보여주기
    win.once('ready-to-show', function(){
        win.maximize();
        win.show();
    });

    // 윈도우 창에 로드 할 html 페이지
    win.loadURL(`file://${__dirname}/index.html`); //작은 따옴표가 아닌  back stick 기호(tab키 위)
    //__dirname : node.js 전역변수이며, 현재 실행중인 코드의 파일 경로를 나타냄

    //개발자 도구 오픈
    win.webContents.openDevTools();
});