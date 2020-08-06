import React, { useEffect } from 'react'
import { CardHeader, Avatar, CircularProgress } from '@material-ui/core'
import useApi from 'hooks/useApi'
import fetchUser from 'api/fetchUser'
import ProgressWrap from 'components/ProgressWrap'
import WarningIcon from '@material-ui/icons/Warning'
import { getColor, getCharacter } from 'utils'

interface IProps {
  userId: number;
}

const UserInfo: React.FC<IProps> = ({ userId }) => {
  const { fetch, data: user, loaded, error } = useApi(fetchUser)

  useEffect(() => {
    fetch(userId)
  }, [fetch, userId])

  if (!user && !!error) {
    return (
      <ProgressWrap>
        <WarningIcon />
      </ProgressWrap>
    )
  }

  return user && loaded ? (
    <CardHeader
      avatar={
        <Avatar style={{ background: getColor(userId) }} aria-label='recipe'>
          {getCharacter(user.username)}
        </Avatar>
      }
      title={user.name}
      subheader={user.username}
    />
  ) : (
    <ProgressWrap>
      <CircularProgress />
    </ProgressWrap>
  )
}

export default UserInfo
