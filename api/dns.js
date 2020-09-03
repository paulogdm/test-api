const dns = require('dns');
const dnsPromises = dns.promises;
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
  all: true
};

module.exports = (req, res) => {
  dnsPromises.lookup('vercel.com', options).then((result) => {
    res.end(result)
  });
}


