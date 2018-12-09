import path from 'path'
import fs from 'fs'

const CONTENT_DIR = `${__dirname}/../../content/cv`

export const getBasics = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${CONTENT_DIR}/basics.md`), 'utf8', (error, buf) => {
    if (error) reject(error)

    const lines = buf.toString().split('\n')

    resolve(lines.reduce((accumulator, line) => {
      if (line.match(/^# /)) {
        accumulator[line.match(/^# ([A-Za-z]+)/)[1].toLowerCase()] = null
      } else if (line.length > 0) {
        accumulator[Object.keys(accumulator).pop()] = line
      }

      return accumulator
    }, {}))
  })
})

export const getContacts = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${CONTENT_DIR}/contact.md`), 'utf8', (error, buf) => {
    if (error) reject(error)

    const faIconMap = {
      email: 'envelope',
    }

    const lines = buf.split('\n')

    resolve(lines.reduce((accumulator, line, i) => {
      if (line.match(/^# /)) {
        const key = line.match(/^# ([A-Za-z]+)/)[1].toLowerCase()
        accumulator[faIconMap[key] || key] = null
      } else if (line.length > 0) {
        accumulator[Object.keys(accumulator).pop()] = line
      }

      return accumulator
    }, {}))
  })
})

export const getSummary = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${CONTENT_DIR}/summary.md`), 'utf8', (error, buf) => {
    if (error) reject(error)

    const lines = buf.toString().split('\n')

    resolve(lines
      .reduce((accumulator, line) => {
        if (line.match(/^# /)) {
          accumulator[parseInt(line.match(/^# ([0-9])/)[1], 10) - 1] = []
        } else if (line.length > 0) {
          accumulator[accumulator.length - 1].push(line)
        }

        return accumulator
      }, []))
  })
})

export const getSkills = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${CONTENT_DIR}/skills.md`), 'utf8', (error, buf) => {
    if (error) reject(error)

    const lines = buf.toString().split('\n')

    resolve(lines.reduce((accumulator, line) => {
      if (line.match(/^# /)) {
        accumulator.push({ title: line.match(/^# ([A-Za-z0-9 ,-]+)/)[1], description: [] })
      } else if (line.length > 0) {
        accumulator[accumulator.length - 1].description.push(line)
      }

      return accumulator
    }, []))
  })
})

export const getEmploymentHistory = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${CONTENT_DIR}/employmentHistory.md`), 'utf8', (error, buf) => {
    if (error) reject(error)

    const lines = buf.toString().split('\n')

    resolve(lines.reduce((accumulator, line) => {
      if (line.match(/^# /)) {
        accumulator.push({ title: line.match(/^# (.+)$/)[1], description: [] })
      } else if (line.match(/^- /)) {
        const linePair = line.split(': ')

        const key = linePair[0].match(/^- ([a-z]+)/)[1]
        const value = linePair[1]

        accumulator[accumulator.length - 1][key] = value
      } else if (line.length > 0) {
        accumulator[accumulator.length - 1].description.push(line)
      }

      return accumulator
    }, []))
  })
})

export const getEducation = () => {}
