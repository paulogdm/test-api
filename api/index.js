const reservedKeys = Object.keys(process.env).filter(el => el.startsWith('VERCEL') || el.startsWith('NOW'))
const reservedVariables = {}
reservedKeys.map( el => reservedVariables[el] = process.env[el])
count = 0
module.exports = (req, res) => {
  count = count + 1
  res.json({ reservedVariables , count})
}