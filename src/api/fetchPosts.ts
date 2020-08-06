import castError from 'api/utils/castError'

function fetchPosts(): Promise<IPost[]> {
  return fetch('/posts', {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(castError)
}

export default fetchPosts
