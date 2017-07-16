module.exports = {
    entry: './js/app.js',
    output: {
         path: __dirname,
         //filename: '../backend/OcniKlinikaServer/Vsb.OcniKlinika.Server/Vsb.OcniKlinikaServer/WebAPI/built/bundle.js'
         //filename: '../backend/UrgentServer/UrgentServer/built/bundle.js'
         filename: '../backend/Vsb.UrgentApp.UI/Vsb.UrgentApp.UI/built/bundle.js'
    },
     devtool: 'source-map',
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['react', 'es2015'],
                 plugins: ['transform-decorators-legacy']
             },
             experimentalDecorators: true
         }]
     }
}