const express = require('express')
const app = express()
const port = 3999

app.use(express.static('public'))

app.listen(port, () => console.log(`app listening on port http://127.0.0.1:${port}!`))
