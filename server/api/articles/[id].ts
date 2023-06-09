import * as fs from 'fs'
import * as path from 'path'
import getMongoDBCollection from '../../utils/mongo-db-utils'

const filePath = path.join(process.cwd(), '/server/articles/')

export default defineEventHandler(async (event) => {
  try {

    const articleId = event.path.split('/').pop();

    const collection = await getMongoDBCollection('articles')

    const info: any = await collection.findOne({ a_id: articleId })

    const content = await fs.readFileSync(filePath + articleId + ".md");
    return {
      a_id: info.a_id,
      name: info.name,
      content: content,
      time: formatDate(new Date(info.publishTime))
    };
  } catch {
    return {
      a_id: '',
      name: '',
      content: '',
      time: ''
    }
  }
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: Date): string {
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${month}, ${day} - ${date.getHours()}:${date.getMinutes()}`;
}

