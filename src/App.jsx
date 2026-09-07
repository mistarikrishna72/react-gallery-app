import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)

    setuserData(response.data)

  }

  useEffect(function () {
    getData()
  }, [index])

  let usersData = <h1 className='text-slate-500 text-3xl'><i className="ri-loader-2-fill"></i> <span>loading...</span></h1>
  if (userData.length > 0) {
    usersData = userData.map(function (ele, idx) {
      return <div className='object-cover bg-slate-800 rounded overflow-hidden h-43 w-50'>
        <img src={ele.download_url} className=' cursor-pointer hover:scale-102 h-[80%] w-full' />
        <h6 className='text-sm font-bold m-1'><i className="ri-user-fill text-white mr-2"></i><span>{ele.author}</span></h6>
      </div>
    })
  }

  return (
    // HEADER
    <div className='h-screen w-full overflow-auto flex flex-col items-center justify-center bg-black text-white'>

      <div className='h-[10vh] w-full flex items-center justify-center border-b-1 border-slate-50'>
        <h1 className='text-4xl'><i className="ri-reactjs-line text-blue-500"></i><span className='font-bold ml-2'>ReactPix</span></h1>
      </div>

      {/* MAIN CONTENT */}
      <div className='h-[80vh] w-full overflow-auto flex justify-center items-center'>

        <div className='h-full flex flex-wrap gap-2 p-3 items-center justify-center'>
          {usersData}
        </div>

      </div>

      {/* FOOTER CONTENT */}
      <div className='h-[10vh] w-full flex items-center justify-center border-t-1 border-slate-50'>
        <div className='flex w-full h-full items-center justify-center gap-5'>
          <button className='bg-blue-500 text-white font-semibold px-2 py-1 rounded cursor-pointer active:scale-95' onClick={()=>{
            if(index > 1){
              setIndex(index-1)
              setuserData([])
            }
          }}>PREV</button>

          <h4 className='text-xl font-bold'>{index}</h4>

          <button className='bg-blue-500 text-white font-semibold px-2 py-1 rounded cursor-pointer active:scale-95' onClick={()=>{
          setIndex(index+1)
            setuserData([])
          }}>NEXT</button>
        </div>
      </div>

      {/* <button className='border-2' onClick={getData}>click me</button>
      */}
    </div>
  )
}

export default App