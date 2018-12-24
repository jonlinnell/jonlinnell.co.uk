const fs = require('fs')
const path = require('path')

const iconMappings = {
  Email: 'fa-envelope',
  Phone: 'fa-phone',
  Website: 'fa-globe',
  Facebook: 'fa-facebook',
  Twitter: 'fa-twitter',
  Linkedin: 'fa-linkedin',
  Instagram: 'fa-instagram',
  GitHub: 'fa-github',
}

module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../../../public/content/cv/contact.json`), 'utf8', (error, data) => {
    if (error) reject(error)

    const { contact } = JSON.parse(data)

    resolve(contact.reduce((accumulator, current) => {
      accumulator.push({
        icon: iconMappings[current.platform],
        ...current,
      })

      return accumulator
    }, []))
  })
})
