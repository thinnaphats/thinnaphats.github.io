const http = require("http");
const port = 8000;

var requset1 = require("request");
list = "";
requset1.get(
  "http://newsapi.org/v2/everything?q=covid19&apiKey=c1610ec8f5124c57888e7690c4d0fdea",
  (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    var result = JSON.parse(body);
    var info = result.articles;
    for (news of info) {
        list += `<li>${news.title}<br></li>`;
      }
  }
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Language", "th");

  res.end(`<h1>Get News</h1> <ol>${list}</ol> `);
});

server.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});