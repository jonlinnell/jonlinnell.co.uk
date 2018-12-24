const path = require('path')
const fs = require('fs')

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/skills.json`), 'utf8', (error, data) => {
    if (error) reject(error)

    const { skills } = JSON.parse(data)

    resolve(skills.reduce((accumulator, current) => {
      const { description, ...rest } = current
      accumulator.push({
        description: description.split('\n'),
        ...rest,
      })

      return accumulator
    }, []))
  })
})
