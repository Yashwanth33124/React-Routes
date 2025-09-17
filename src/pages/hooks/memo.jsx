
import React, { useState } from 'react'
import useFetch from '../../hooks/usehooks'

const Memo = () => {
     const{data,loading} = useFetch('https://dummyjson.com/products')
     let[flag,setflag] = useState(false)

     function filterproducts(getProducts) {
        return getProducts?.length > 0
        ? getProducts.filter((singleproduct) => singleproduct.price > 10) : []
     }

     if(loading) return <h1>Loading data ! please Wait</h1>

     console.log(data)
  return (

   

    <div>
      <h1 style={{color: flag ? "red" : "black"}}>Use Memo</h1>
      <button onClick={()=>setflag(!flag)}>
        Toggle
      </button>
      <ul>
        {
            filterproducts(data?.products).map(item=> 
             <li>{item.title}</li>)
        }
      </ul>
    
    </div>
  )
}

export default Memo
