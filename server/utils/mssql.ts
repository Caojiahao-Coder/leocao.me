/*
Config Microsoft SQL Server
*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import sql from 'mssql'

const sqlConfig: any = {
  user: process.env.VUE_APP_USER,
  password: process.env.VUE_APP_PWD,
  database: process.env.VUE_APP_DB,
  server: process.env.VUE_APP_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
}

class MSSQL {
  sqlConfig: any

  constructor(sqlConfig: any) {
    this.sqlConfig = sqlConfig
  }

  /**
   * 执行sql
   * @param queryStr sql脚本
   * @returns
   */
  async query(queryStr: string) {
    const ctx = await sql.connect(sqlConfig)
    const result = await ctx.query(queryStr)
    return result.recordset
  }
}


const ctx = new MSSQL(sqlConfig)
export default ctx
