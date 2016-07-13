var menubar = require('menubar');

const mb = menubar({
  height: 400,
  width: 600,
  index: `file://${__dirname}/index.html`,
  showDockIcon: true
})

mb.on('ready', () => {
  console.log("Hello, world")
})

mb.on('after-create-window', () => {
  mb.window.openDevTools()
})