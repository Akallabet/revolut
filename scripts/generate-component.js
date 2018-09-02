const fs = require('fs')
const path = require('path')
const COMPONENTS_DIR = path.resolve(__dirname, '../src/components')
const SCRIPTS_DIR = path.resolve(__dirname, './')

const fName = process.argv[2]
const cName = fName
  .split('-')
  .map(
    pName => `${pName.slice(0, 1).toUpperCase()}${pName.slice(1, pName.length)}`
  )
  .join('')
const componentTemplate = fs.readFileSync(
  `${SCRIPTS_DIR}/component.txt`,
  'utf8'
)
const containerTemplate = fs.readFileSync(
  `${SCRIPTS_DIR}/container.txt`,
  'utf8'
)

fs.mkdirSync(`${COMPONENTS_DIR}/${fName}`)
fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/${fName}.js`,
  componentTemplate.replace(/\$CNAME/g, cName).replace(/\$FNAME/g, fName),
  'utf8'
)
fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/${fName}.css`,
  '',
  'utf8'
)
fs.writeFileSync(
  `${COMPONENTS_DIR}/${fName}/${fName}-container.js`,
  containerTemplate.replace(/\$CNAME/gi, cName).replace(/\$FNAME/g, fName),
  'utf8'
)
