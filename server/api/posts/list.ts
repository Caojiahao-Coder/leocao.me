import { Link } from './../../../.nuxt/components.d';
import ctx from '../../utils/mssql'

export default defineEventHandler(async (event) => {
  const getYearGroupSql = "select data.Year from (select CONVERT(varchar(4),create_time,23) as Year from articles) data group by data.Year"
  const data = await ctx.query(getYearGroupSql) as { Year: number }[]

  const result: {
    Year: number,
    Articles: {
      Id: number,
      Title: string,
      Link: string,
      Date: string
    }[]
  }[] = []

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const getArticleListSql = "select id as Id ,title as Title ,link as Link, CONVERT(varchar(6),create_time,107) as [Date] from articles where YEAR(create_time) = " + item.Year
    const articleListData = await ctx.query(getArticleListSql)
    result.push({
      Year: item.Year,
      Articles: articleListData
    })
  }

  return result
})
