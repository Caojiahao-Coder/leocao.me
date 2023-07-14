import ctx from '../../utils/mssql'

export default defineEventHandler(async (event) => {
  const getProjectsSql = 'select id as Id, title as Title, [desc] as [Desc],cover as Cover , link as Link from projects'
  var data = await ctx.query(getProjectsSql)
  return data
})
