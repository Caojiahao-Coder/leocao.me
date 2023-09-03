import ctx from '../../utils/mssql'
import Tb_ProjectInfo from './types/project'

export default defineEventHandler(async (event) => {
  const getProjectsSql = "select id as Id, title as Title, [desc] as [Desc],cover as Cover , link as Link,github as GitHub, readme as README from projects"
  var data: Tb_ProjectInfo[] = await ctx.query(getProjectsSql)
  return data
})
