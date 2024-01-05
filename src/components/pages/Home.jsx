import {useContext} from 'react'
import SearchUser from '../User/SearchUser'
import UserResult from '../User/UserResult'
import faceContext from '../../context/face/FaceContext'

function  Home() {
  const {user} = useContext(faceContext)

   return user.length === 0 ? <SearchUser/> : <UserResult/>
        
  }
export default  Home