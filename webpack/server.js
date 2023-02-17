const serverOptions = {
  host: 'localhost',
  port: 3000,
  hot: true,
  liveReload: true,
  compress: true,
  open: false,
  static: ['public'],
  client: {
    overlay: true,
    logging: 'info',
    reconnect: 3,
  },
  watchFiles: {
    paths: ['src/**/*.*', 'public/**/*.*'],
  },
}

module.exports = serverOptions;