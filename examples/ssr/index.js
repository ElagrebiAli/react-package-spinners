const { createElement, Fragment } = require('react');
const { renderToString } = require('react-dom/server')
const { Grid , Spinner, Circle } = require('react-package-spinners');

const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 3000
 

app.get('*',(req,res)=>{
    const html = renderToString(createElement(Circle))
    console.log('html',html)
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body >
        ${html}
    </body>
    </html>`)
})

app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
})