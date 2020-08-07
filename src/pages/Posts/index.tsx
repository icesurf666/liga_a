import React, {
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
  useMemo,
} from 'react'
import useApi from 'hooks/useApi'
import fetchPosts from 'api/fetchPosts'
import { TextField } from '@material-ui/core'
import { PostItem, BigLoader } from 'components'
import Pagination from '@material-ui/lab/Pagination'
import PostWrap from './components/PostWrap'
import PaginationWrap from './components/PaginationWrap'

const Posts: React.FC = () => {
  const [search, setSearch] = useState('')
  const { fetch, data: posts, loading } = useApi(fetchPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10

  useEffect(() => {
    fetch()
  }, [fetch])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase())
  }, [])

  const filteredPosts = useMemo(() => (
    posts && posts.filter((post) => post.title.toLowerCase().includes(search))
  ), [posts, search])

  const lastPost = currentPage * perPage
  const firstPost = lastPost - perPage
  const currentPosts
    = filteredPosts && filteredPosts.slice(firstPost, lastPost)

  const handlePaginate = useCallback((event: any, value: number) => {
    setCurrentPage(value)
  }, [])

  return (
    <div>
      <TextField
        onChange={handleChange}
        id='outlined-basic'
        label='Search'
        variant='outlined'
      />
      {currentPosts &&
        currentPosts.map((post) => (
          <PostWrap key={post.id}>
            <PostItem post={post} />
          </PostWrap>
        ))}
      {filteredPosts && (
        <PaginationWrap>
          <Pagination
            page={currentPage}
            count={filteredPosts.length / perPage}
            color='primary'
            onChange={handlePaginate}
          />
        </PaginationWrap>
      )}
      {loading && <BigLoader />}
    </div>
  )
}

export default Posts
