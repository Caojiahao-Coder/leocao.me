import getMongoDBCollection from '../../utils/mongo-db-utils'

export default defineEventHandler(async () => {
  const collection = await getMongoDBCollection('blog')
  var data = await collection.find({}).toArray();
  return data.map((p: any) => {
    return {
      title: p.title,
      fileList: p.fileList.map((subItem: any) => {
        return {
          name: subItem.name,
          publishTime: formatDate(new Date(subItem.publishTime)),
          a_id: subItem.a_id
        } as {
          name: string,
          publishTime: string,
          a_id: string
        }
      })
    } as BlogListInfo
  })
})

interface BlogListInfo {
  title: string,
  fileList: {
    name: string,
    publishTime: string,
    a_id: string
  }[]
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: Date): string {
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${month}, ${day} - ${date.getHours()}:${date.getMinutes()}`;
}
