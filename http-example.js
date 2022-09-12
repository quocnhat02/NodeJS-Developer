const http = require("http");

http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
});
