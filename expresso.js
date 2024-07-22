const express = require('express')
const { logger, morganMiddleware } = require('./logger.js');




function expresso(port,http){
    let app;
    if(!port) {
        throw new Error('App or Port is undefined')
    }
    if(http){
        app = express()
        const server = http.createServer(app)
        server.listen(port,()=>{
            logger.info(`server is listening ${port}`)
        })
        return {server,app}
    }else{
        app = express()
        app.listen(port,()=>{
            logger.info(`server is listening ${port}`)
        })
        return app
    }
    
}
function setMiddleware(app,middlewares){
    if(!Array.isArray(middlewares)){
        throw new Error('middlewares should be an array')
    }
    if(!app){
        throw new Error('server instance is not defined')
    }
    middlewares.map(function(m){
        app.use(m)
    })
    app.use(morganMiddleware)
}

function serveStaticFiles(app, staticPath) {
    if(!staticPath){
        throw new Error('static path is not defiend')
    }
    if(!app){
        throw new Error('server instance is not defiend')
    }
    app.use(express.static(path.join(__dirname, staticPath)));
}

function setVals(app,sets){
    if (!Array.isArray(sets)) {
        throw new Error('sets should be an array');
    }
    sets.forEach(set => {
        if (typeof set !== 'object') {
            throw new Error('Each set should be an object');
        }
        for (const [key, value] of Object.entries(set)) {
            app.set(key, value);
        }
    });
}

module.exports = {
    expresso,
    setMiddleware,
    setVals,
    serveStaticFiles
}

