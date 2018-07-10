const express = require('express'); 
//require express and morgan part of node modules
const morgan = require('morgan');
const app = express(); //tells server to connect to express view


const blogPostsRouter = require('./blogPosts'); 
//require the blogPosts router

app.use(morgan("common"));
app.use(express.json());


app.use('/blog-posts', blogPostsRouter); 
//address to router, setting router part of URL


app.listen(process.env.PORT || 8080, () => { 
//"document ready function"
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});