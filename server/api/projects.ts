export default defineEventHandler((event) => {
  const projectsList: {
    id: number,
    title: string,
    cover: string,
    description: string,
    githubLink: string,
    livePreview: string
  }[] = [{
    id: 1,
    title: 'GPT_Next',
    cover: 'i-carbon-phrase-sentiment',
    description: 'GPT_Next is an AI chat tools.',
    githubLink: 'https://github.com/Caojiahao-Coder/gpt_next',
    livePreview: 'https://gpt-next-shvd.vercel.app/'
  }]
  return {
    code: 1,
    message: 'successfully',
    data: projectsList
  }
})
