import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios'
const ButtonFilter = ({fetchData: fetchAPI}) => {
  const {fetchData, response:{categories}, loading} = useAxios('categories');

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  },[]);

 if(loading){
  return(
    <div className='animate-pulse my-5 inline-block text-center'>
      {[...Array(35).keys()].map(num =>(
        <div className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block" key={num}></div>
      ))}
    </div>
  )
 }
 const clickFilterButton = e => {
  fetchAPI({params: {category: e.target.value}})
 }
  return (
    <div className="text-center my-5">
    {categories && categories.map(button => (
      <button
        key={button}
        className="bg-pink-400 text-white m-1 py-1 px-2 rounded-sm hover:bg-pink-500"
        value={button}
        onClick={clickFilterButton}
      >{button}</button>
    ))}
    </div>
  )
}

export default ButtonFilter