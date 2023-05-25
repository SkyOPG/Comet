module.exports = {

    express: function(path1, path2){
        const colors = require('colors')
    const express = require('express')
    const app = express()

    app.enable('trust proxy')
    app.set("etag", false)
    app.use(express.static('../Dashboard'))

    app.get('/', (req, res) => {
        res.sendFile('../Dashboard/html/home.html', { root: __dirname })
      })

    app.listen(90, () => console.log('listening to port 90!'.green))
    }
}