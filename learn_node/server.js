import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.writeHead(500, {'Content-Type': 'text/html'})
    // res.end(JSON.stringify({message: 'Server error' }));
    console.log(req.url)
    console.log(req.method)

    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`<h1>my port is: ${PORT}</h1>`)
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})