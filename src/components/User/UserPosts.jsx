function UserPosts({filteredpost:{message}}) {

  return (
      <div className="card shadow-lg compact side bg-base-100">
        <div className='card-body items-center space-x-4 flex-row font-bold'>
        {message}  
        </div>
      </div>
   )
}

export default UserPosts