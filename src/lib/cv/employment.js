const path = require('path')
const fs = require('fs')

const summariseDate = require('../summariseDate')

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/employment.json`), 'utf8', (error, data) => {
    if (error) reject(error)

    const { job } = JSON.parse(data)

    resolve(job.reduce((accumulator, current) => {
      const {
        description,
        startDate,
        endDate,
        ...rest
      } = current
      accumulator.push({
        startDate: summariseDate(startDate),
        endDate: summariseDate(endDate),
        description: description.split('\n'),
        ...rest,
      })

      return accumulator
    }, []))
  })
})
