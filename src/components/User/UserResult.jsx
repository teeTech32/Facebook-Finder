import { useContext} from 'react'
import faceContext from '../../context/face/FaceContext'
import Spinner from '../Layouts/Spinner'
import {  FaMailBulk, FaHouseUser,} from 'react-icons/fa'
import {  FaUsers, FaMapLocationDot} from 'react-icons/fa6'
import UserPosts from './UserPosts'

function UserResult() {
  const {loading, user, setUser, userposts, setUserposts, posts } = useContext(faceContext)

  const {name,email,friends,picture,hometown,location,id} = user

  const no_of_friends = friends.summary.total_count ?? 0
  const picture_url = picture.data.url ?? ""
  const home_town = hometown.name ?? ''
  const location_present_place = location.name ?? ''
  const datas = posts.data
  
  const filteredposts = datas.filter((data)=>(data.message))
  
  const clearUser = ()=>{
    setUser('')
  }

  return loading ? <Spinner/> :( 
    <div className="container rounded-lg bg-blue-400 mt-5 mb-20 p-5">
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div className="">
          <div className=" mt-5 ml-40  ">
            <figure>
              <img className='image-full rounded-full  h-20 w-20 font-bold  ' src={picture_url} alt='' />
            </figure>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className='card-title font-bold mx-2'>NAME: {name}</h1>
          <div className="badge badge-lg text-blue-700 font-bold p-2 my-4">USER-ID: {id}</div>
          {email && (<div className='flex-none  '>
            <FaMailBulk className='text-4xl inline text-blue-800 pr-2 '/>
            <div className="font-bold align-meddle inline">{email}</div>
          </div>)}
          <div className="w-full bg-base-100 stats rounded-lg shadow-md stats mt-5">
            <div className="stat ">
              <div className="stat-figure text-blue-700">
                <FaMapLocationDot className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title font-bold">Location</div>
              <div className="stat-value text-xl">{location_present_place}</div>
            </div>
            <div className="stat ">
              <div className="stat-figure text-blue-700">
                <FaUsers className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title font-bold">Friends</div>
              <div className="stat-value text-xl">{no_of_friends}</div>
            </div>
            <div className="stat ">
              <div className="stat-figure text-blue-700">
                <FaHouseUser className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title font-bold">Hometown</div>
              <div className="stat-value text-xl">{home_town}</div>
            </div>
          </div>
          <div className="flex flex-1 mb-5 justify-start mt-5">
             <button className="btn btn-ghost btn-sm font-bold" onClick={()=>{
                     setUserposts(prevState => !prevState)}}>
                      {!userposts ? 'OPEN-USER-POSTS' : 'CLOSE-USER-POSTS'}
             </button>
          </div>
        </div>
    </div>
   {userposts && <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredposts.map((filteredpost)=>(<UserPosts key={filteredpost.id} filteredpost={filteredpost}/>))}
     </div>} 
    <div className="flex flex-1 justify-end mt-5">
        <button className="btn btn-ghost btn-sm" onClick={clearUser}>Log-Out</button>
    </div>
  </div>
 
   
  )
   
}

export default UserResult

