const express = require('express');
const path = require('path');

//^To process a env file we can use a process.env method and just specify the variable inside the env
const port = process.env.PORT || 8000;


//^This app variable is used everywhere
const app = express();



//*Unlike the node we dont need to change the 'ContentType': to html it is automatically change it into HTML
// app.get('/', (req, res) => {
//     res.sendFile('Hello LAMAW')
// });

// app.get('/about', (req, res) => {
//     res.send('lamaw')
// }) 

//*We can setup a static folder to hold all of the paths
//app.use(express.static(path.join(__dirname, 'public')))

//*We can also directly use our components like html file or JSX file something like that
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post three'}
]

//to get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

//^to get single posts
app.get('/api/posts/:id', (req, res) => {
    console.log(req.params.id)
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

//^This .listen() method is use to connect into a port.
app.listen(port, () => console.log(`Port is  running on port: ${port}`));