import getMongoDBCollection from "../../utils/mongo-db-utils"

export default defineEventHandler(async (event) => {
  const collection = await getMongoDBCollection("projects")
  const data = await collection.find({}).toArray();

  const result: {
    id: number,
    title: string,
    cover: string,
    description: string,
    githubLink: string,
    livePreview: string
  }[] = data.map((p: any) => {
    return p as {
      id: number,
      title: string,
      cover: string,
      description: string,
      githubLink: string,
      livePreview: string
    }
  })


  return result;
})
