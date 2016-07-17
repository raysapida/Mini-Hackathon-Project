
var path = require('path')
var express = require('express')
var port = (process.env.PORT || 8080)

var server = {
  app: function () {
    var app = express()
    var indexPath = path.join(__dirname, './public/index.html')
    var publicPath = express.static(path.join(__dirname, './public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}

app = server.app()
app.listen(port)
console.log(`Listening at http://localhost:${port}`)