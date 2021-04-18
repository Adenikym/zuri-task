
// fetch and write to file

const fs= require ('fs')

const fetch = require('node-fetch');

let url = "https://jsonplaceholder.typicode.com/posts";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {

    fs.writeFile('./result/posts.json',JSON.stringify(json), (err)=>{
        if(err) throw err
    })

    });