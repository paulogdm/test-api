const dns = require('dns');
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
  all: true
};

module.exports = (req, res) => {
  dns.lookup('vercel.com', options, (err, result) => {
    res.json({ 'vercel.com': result})
  })
}


