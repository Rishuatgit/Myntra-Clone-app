const { readFileSync } = require('fs')
const http = require('http')
const path = require('path')

const htmlfile=readFileSync(path.join(__dirname,'index.html'))

const server = http.createServer((req, res) => {
     if(req.url==='/myntra'){
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(htmlfile)
}else{
    res.writeHead(404,{'Content-type':'text/plain'})
    res.end("Not Found")

}

})



const port = 3000
server.listen(port, () => {
    console.log(`web is listening on port ${port}`)
})