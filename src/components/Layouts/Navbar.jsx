import {FaFacebook} from "react-icons/fa"
import { Link } from "react-router-dom"
import PropsType from "prop-types"
function Navbar({title}) {
  return (
    <div className='navbar bg-blue-700 mb-15 text-white shadow-lg'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaFacebook className=" text-5xl inline pr-2  "/>
          <Link to='/' className=" font-bold  text-lg">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/About' className="btn btn-ghost btn-sm">
            About
            </Link>
            <Link exact='true' to='/' className="btn btn-ghost btn-sm">
              Home
            </Link>
          </div>
          


        </div>
       
      </div>  
    </div>
  )
}

Navbar.defaultProps={
  title:"Faceboook"
}
Navbar.propsType={
  title:PropsType.string
}
export default Navbar