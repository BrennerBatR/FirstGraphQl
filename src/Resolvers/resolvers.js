
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
  let idCount = links.length
module.exports = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
      },
      Mutation: {
        post: (parent, args) => {
           const link = {
            id: `link-${idCount++}`,
            description: args.description,
            url: args.url,
          }
          links.push(link)
          return link
        }
      },
}