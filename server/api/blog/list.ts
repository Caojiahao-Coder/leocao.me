import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join(process.cwd(), '/server/articles')

export default defineEventHandler(async () => {
  const data = await getDirList(filePath)
  return {
    code: 1,
    message: 'successfully',
    data: data
  }
})

async function getDirList(filePath: string): Promise<BlogListInfo[]> {
  const data: BlogListInfo[] = []
  try {
    const dirs = await getFileListSortedByCreateTime(filePath)
    for (let i = 0; i < dirs.length; i++) {
      const item = dirs[i];
      const path = filePath + "/" + item + "/";
      data.push({
        title: item,
        fileList: await getPathFileList(item, path)
      })
    };
  } catch {
  }
  return data;
}

async function getPathFileList(item_path: string, path: string): Promise<{ name: string, path: string, publishTime: string }[]> {
  const fileList = await getFileListSortedByCreateTime(path)

  const data: { name: string, path: string, publishTime: string }[] = []

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i]
    const stat = await fs.statSync(path + "/" + file)
    if (!stat.isFile()) {
      continue;
    }

    const fileNameList = file.toString().split('.');
    fileNameList.pop()

    data.push({
      name: fileNameList.join(''),
      path: item_path,
      publishTime: formatDate(stat.ctime)
    })
  }

  console.log(data)

  return data
}

async function getFileListSortedByCreateTime(path: string): Promise<string[]> {
  const files = await fs.readdirSync(path);
  const fileStats = await Promise.all(files.map(file => fs.statSync(`${path}/${file}`)));
  const fileWithStats = files.map((file, index) => ({
    name: file,
    stats: fileStats[index]
  }));
  const sortedFiles = fileWithStats.sort((file1, file2) => file2.stats.ctimeMs - file1.stats.ctimeMs);
  return sortedFiles.map(file => file.name);
}

interface BlogListInfo {
  title: string,
  fileList: {
    name: string,
    path: string,
    publishTime: string,
  }[]
}


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date: Date): string {
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  return `${month}, ${day} - ${date.getHours()}:${date.getMinutes()}`;
}
