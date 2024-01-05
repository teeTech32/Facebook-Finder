import { createContext, useState, } from "react"

const faceContext = createContext()
const FBURL = process.env.REACT_APP_FB_URL
const FBTOKEN = process.env.REACT_APP_FB_TOKEN

export const FaceProvider = ({children}) =>{
   const [user, setUser] = useState([])
   const [loading, setLoading] = useState(false)
   const [alert, setAlert] = useState('')
   const [alert1, setAlert1] = useState('')
   const [userposts, setUserposts] = useState(false)
   const [posts, setPosts] = useState()

   const fetchUser = async(userid) => {
      const response = await fetch(`https://${FBURL}/${userid}?fields=id,name,email,picture,friends,hometown,location&access_token=${FBTOKEN}`)

      if(response.status===400){
         setAlert1('Something went wrong')
         setTimeout(()=>{window.location='/Notfound'},2000)
         console.log("Hello ooo")   
      }else{
         const data = await response.json()
         setLoading(true)
         setTimeout(()=>{setLoading(false)},2000)
         setTimeout(()=>{setAlert('Successful')},2000)
         setTimeout(()=>{setUser(data)},3000)
         setTimeout(()=>{setAlert('')},3000)
      }
   }

   const getPosts = async(userid) => {
    const response = await fetch(`https://${FBURL}/v18.0/${userid}/posts?&access_token=${FBTOKEN}`)
    const data = await response.json()
    setPosts(data)
   }
   
 return(
        <faceContext.Provider 
         value={{
            fetchUser,
            setLoading,
            setUser,
            setUserposts,
            getPosts,
            userposts,
            loading,
            alert,
            alert1,
            user,
            posts
            }}>
           {children}
        </faceContext.Provider>
 ) 
}
export default faceContext