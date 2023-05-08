export default defineEventHandler(async (e) => {
  // handle query params
  const { name } = getQuery(e)

  // handle post data
  const { age } = await readBody(e)

  return {
    basic: `Hello ninja!`,
    query_param: `Hello, ${name}`,
    post_req: `You are ${age} years old.`,
  }
})