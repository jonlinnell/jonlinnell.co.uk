const path = require('path')
const fs = require('fs')

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/basics.json`), 'utf8', (error, data) => {
    if (error) reject(error)

    resolve(JSON.parse(data))
  })
})
