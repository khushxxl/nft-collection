export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId
  // As all the images are uploaded on github, we can extract the images from github directly.
  const image_url =
    'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: 'Crypto Dev #' + tokenId,
    description: 'Crypto Dev is a collection of developers in crypto',
    image: image_url + tokenId + '.svg',
  })
}
