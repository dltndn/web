var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;  

    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readFile(`data/block_chain`, 'utf8', function(err, description){
          var title = 'Block Chain';
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>Block Chain - ${title}</title>
            <meta charset="UTF-8">
          </head>

          <body>
            <h1><a href="/">Block Chain</a></h1>
          <ul>
            <li><a href="/?id=BTC">BTC</a></li>
            <li><a href="/?id=ETH">ETH</a></li>
            <li><a href="/?id=Beacon_chain">Beacon chain</a></li>
          </ul>
          <h3>${title}</h3>
          <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>Block Chain - ${title}</title>
            <meta charset="UTF-8">
          </head>

          <body>
            <h1><a href="/">Block Chain</a></h1>
          <ul>
            <li><a href="/?id=BTC">BTC</a></li>
            <li><a href="/?id=ETH">ETH</a></li>
            <li><a href="/?id=Beacon_chain">Beacon chain</a></li>
          </ul>
          <h3>${title}</h3>
          <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }
    } else {
      response.writeHead(404);
      response.end('not found');
    }





});
app.listen(3000);


// if(_url == '/'){
//   _url = 'Block_Chain';
// }
// if(_url == '/favicon.ico'){
//   return response.writeHead(404);
// }
