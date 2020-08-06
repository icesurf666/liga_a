import castError from 'api/utils/castError'

function fetchUser(id: number): Promise<IUser> {
  return fetch(`/users/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(castError)
}

export default fetchUser
