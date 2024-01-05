import { useContext, useState, useEffect } from 'react'
import faceContext from '../../context/face/FaceContext'
import { FaCircleCheck, FaCircleXmark, FaEye } from 'react-icons/fa6'
import Spinner from '../Layouts/Spinner'


function SearchUser() {
  const {fetchUser, setLoading, alert, alert1, loading, getPosts} = useContext(faceContext)
  const [userid, setUserid] = useState()
  const [showpassword, setShowpassword] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{ setLoading(false)},3000)
    //eslint-disable-next-line
  },[])

  const handleChange = (e) =>{
    setUserid(e.target.value) 
  }
  const clearInput = ()=>{
    setUserid('')
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetchUser(userid)
    getPosts(userid)
    setUserid('')
  }

  return loading ? <Spinner/> : (
    <div className='grid grid-cols-1 '>
      <div className="card-body shadow hover:shadow-xl rounded-lg bg-gray-300 mb-20 mt-5">
        {alert && <div className='flex flex-1 leading-7'>
                    <FaCircleCheck className='inline text-3xl text-green-600 mr-2'/>
                    <div className='align-meddle  text-green-600 font-bold text-xl '>{alert}</div>
                  </div>  }
        {alert1 && <div className='flex flex-1 leading-7'>
                    <FaCircleXmark className='inline text-3xl text-red-500 mr-2'/>
                    <div className='align-meddle  text-red-500 font-bold text-xl '>{alert1}</div>
                  </div> }          
        <div>
          <form  onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input type={showpassword ? 'number' : 'password'} 
                    className="input input-md bg-white text-black w-full rounded-full shadow-xl mb-5" 
                    placeholder='Search With User-ID' 
                    value={userid}
                    onChange={handleChange}/>
                 <FaEye className='absolute text-2xl top-3 right-20 mr-2' onClick={() => setShowpassword(prevState => !prevState)}/>    
                 <button className='absolute rounded-full btn btn-md w-20 btn-ghost top-0 right-0 ml-2'>Send</button> 
              </div>
            </div>
          </form>
        </div>
        <button className='justify-center btn btn-md btn-ghost' onClick={clearInput}>Clear</button>
      </div>
    </div>
  )
}

export default SearchUser