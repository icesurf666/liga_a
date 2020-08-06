import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import UserInfo from './components/UserInfo'

interface IProps {
  post: IPost;
}

const PostItem: React.FC<IProps> = ({ post }) => (
  <Card>
    <UserInfo userId={post.userId} />
    <CardContent>
      <Typography color='secondary' gutterBottom>
        {post.title}
      </Typography>
      <Typography gutterBottom>
        {post.body}
      </Typography>
    </CardContent>
  </Card>
)

export default PostItem
