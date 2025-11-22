import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import { getUserInfo } from '../api/users.js'

export function User({ username }) {
  const userInfoQuery = useQuery({
    queryKey: ['users', username],
    queryFn: () => getUserInfo(username),
  })
  const userInfo = userInfoQuery.data ?? {}
  return <strong>{userInfo?.username ?? username}</strong>
}
User.propTypes = {
  username: PropTypes.string.isRequired,
}
