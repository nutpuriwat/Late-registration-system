var http = require('http');
var fs = require('fs');
var os = require("os");
http.createServer(function(req, res) {
    console.log(req.url);
    if (req.method === 'GET') {
        var url = '';
        var index = req.url.indexOf('?');
        var path;
        if (index != -1)
            path = req.url.substring(0, index);
        else
            path = req.url;
        console.log('path: ' + path);
        switch (path) {
            case '/index':
                url = 'index.html';
                break;
            case '/mainpage2':
                url = 'mainpage2.html';
                break;
            case '/getInfo':
                url = 'Info.json'
                break;
            case '/getProfile':
                url = 'profile.json'
                break;
            case '/info':
                url = 'info.html';
                break;
			case '/APage':
				url = 'APage.html';
				break;
            case '/exit':
                process.exit();
                break;
            default:
                if (req.url.includes('.')) {
                    url = req.url;
                    break;
                }
                url = 'index.html';
                break;
        }

        console.log(url);
        if (url) {
            if (url.charAt(0) == '/') {
                url = url.substring(1);
            }
            fs.readFile(url, function(err, data) {

                console.log(err);
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('<h1>404 NOT FOUND</h1>');
                    return res.end();
                } else {
                    if (url.endsWith('.html'))
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                    else if (url.endsWith('.js')) {
                        res.writeHead(200, { 'Content-Type': 'text/javascript' });
                    } else if (url.endsWith('.json')) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                    }
                    res.write(data);
                    return res.end();
                }
            });
        } else {
            res.end();
        }
    } else if (req.method === 'POST') {
        var url = '';
        var index = req.url.indexOf('?');
        var path;
        if (index != -1) {
            path = req.url.substring(0, index);
        } else {
            path = req.url;
        }
        switch (path) {
            case '/saveInfo':
                req.on('data', chunk => {
                    let json = JSON.parse(chunk);

                    let outputJson = [];
                    let data = fs.readFileSync('Info.json', { encoding: "utf-8" });
                    outputJson = JSON.parse(data);
                    outputJson.push(json);
                    outputJson = JSON.stringify(outputJson);

                    fs.writeFileSync('Info.json', outputJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.write('Complete!!!');
                    res.end();
                })
                break;
            case '/update':
                req.on('data', chunk => {
                    let json = JSON.parse(chunk);
                    outputJson = JSON.stringify(json);

                    fs.writeFileSync('Info.json', outputJson);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.write('Complete!!!');
                    res.end();
                })
                break;
                case '/savereport':
                    req.on('data', chunk => {
                      let json = JSON.parse(chunk);
    
                      let outputJson = [];
                      let data = fs.readFileSync('savereport.json', {encoding: "utf-8"});
                      outputJson = JSON.parse(data);
                      outputJson.push(json);
                      outputJson = JSON.stringify(outputJson);
    
                      fs.writeFileSync('savereport.json', outputJson);
                      res.writeHead(200, {'Content-Type': 'text/plain'});
                      res.write('Complete!!!');
                      res.end();
                      })
                    break;
            default:
                res.end();
        }
    } else {
        res.end();
    }
}).listen(8000);