module.exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return `encrypt ${data}`;
}

module.exports.send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

