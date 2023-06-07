import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join(process.cwd(), '/server/articles')

export default defineEventHandler(async (event) => {
  const data = event.path.split('?')[1].split('&').map(a => a.split('='))

  const articleContent = await fs.readFileSync(filePath + "/" + decodeURI(data[0][1]) + "/" + decodeURI(data[1][1]) + ".md")

  const state = await fs.statSync(filePath + "/" + decodeURI(data[0][1]) + "/" + decodeURI(data[1][1]) + ".md")

  return {
    name: decodeURI(data[1][1]),
    content: articleContent,
    time: formatDate(state.ctime)
  }
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: Date): string {
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${month}, ${day} - ${date.getHours()}:${date.getMinutes()}`;
}
