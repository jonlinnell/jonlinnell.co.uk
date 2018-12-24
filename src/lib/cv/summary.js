import path from 'path'
import fs from 'fs'

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/summary.json`), 'utf8', (error, data) => {
    if (error) reject(error)

    resolve(JSON.parse(data))
  })
})
