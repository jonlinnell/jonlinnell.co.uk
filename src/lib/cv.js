import path from 'path'
import fs from 'fs'

const CONTENT_DIR = `${__dirname}/../content/cv`

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

export const getEducation = () => {}
