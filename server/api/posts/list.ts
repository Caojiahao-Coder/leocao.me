import * as path from 'path'
import * as fs from 'fs'

const rootPath = path.join(process.cwd())
export default defineEventHandler(async (event) => {
  const path = rootPath + "/content/"
  var files = fs.readdirSync(path).filter(a => a.endsWith('.md')).map(a => {
    return {
      fileName: a,
      fileInfo: fs.statSync(path + a)
    }
  })

  files = files.sort((a, b) => {
    return a.fileInfo.ctimeMs - b.fileInfo.ctimeMs
  })

  var allFiles = files.map(a => {
    return {
      fileName: a.fileName.replace('.md', ''),
      fileLink: a.fileName.replace('.md', '').toLowerCase(),
      cTime: formatDate(a.fileInfo.ctime),
      year: a.fileInfo.ctime.getFullYear()
    }
  });

  var years = [...new Set(allFiles.map(a => a.year))]

  return years.map(item => {
    return {
      year: item,
      files: allFiles.filter(a => a.year === item).map(a => {
        return {
          fileName: a.fileName,
          fileLink: a.fileLink,
          cTime: a.cTime,
        }
      })
    }
  })
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: Date): string {
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${month}, ${day}`
}
