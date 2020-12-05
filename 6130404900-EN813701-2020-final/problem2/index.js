const http = require("http");
const port = 8000;

var requset1 = require("request");
list = "";
requset1.get(
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7GWLfXzbgTIHXm4idiyV10dBu3vMigy4",
  (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    var result = JSON.parse(body);
    var info = result.results;
    for (news of info) {
        list += `<li>${news.title}<br><img src="${news.media.url}"></li>`;
      }
  }
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Language", "th");

  res.end(`<h1>New York Times Popular News</h1> <ol>${list}</ol> `);
});

server.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
