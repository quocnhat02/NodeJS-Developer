const internals = require("./internals");
// const { send } = require("./internals/request");
// const { read } = require("./internals/response");

function makeRequest(url, data) {
  internals.send(url, data);
  return internals.read();
}

const responseData = makeRequest("https://google.com", "hello");
console.log(responseData);
