import React, { useEffect, useState, useCallback, ChangeEvent, useMemo } from 'react'
import useApi from 'hooks/useApi'
import fetchPosts from 'api/fetchPosts'
import { TextField } from '@material-ui/core'
import PostWrap from './components/PostWrap'
import { PostItem, BigLoader } from 'components'

const Posts: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetch, data: posts, loading } = useApi(fetchPosts)

  useEffect(() => {
    fetch()
  }, [fetch])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase())
  }, [])

  const filteredPosts = useMemo(() => {
    return posts && posts.filter((post) => post.title.toLowerCase().includes(search)
    )}, [posts, search])

  return (
    <div>
      <TextField onChange={handleChange} id='outlined-basic' label='Search' variant='outlined' />
      {filteredPosts && filteredPosts.map((post) => (
        <PostWrap key={post.id}>
          <PostItem post={post} />
        </PostWrap>
      ))}
      {loading && <BigLoader />}
    </div>
  )
}

export default Posts
