const reservedKeys = Object.keys(process.env).filter(el => el.startsWith('VERCEL') || el.startsWith('NOW'))
const reservedVariables = {}
reservedKeys.map( el => reservedVariables[el] = process.env[el])

module.exports = (req, res) => {
  res.json({ reservedVariables})
}