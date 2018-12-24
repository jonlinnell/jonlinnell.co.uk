const path = require('path')
const fs = require('fs')

const summariseDate = require('../summariseDate')

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/education.json`), (error, data) => {
    if (error) reject(error)

    const { education } = JSON.parse(data)

    resolve(education.reduce((accumulator, current) => {
      const { startDate, endDate, ...rest } = current
      accumulator.push({
        startDate: summariseDate(startDate),
        endDate: summariseDate(endDate),
        ...rest,
      })

      return accumulator
    }, []))
  })
})
