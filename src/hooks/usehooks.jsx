import { useEffect, useState } from "react"




function usefetch(url) {

    let[data,setdata] = useState(null)
    let[loading,setloading] = useState(false)
    let[error,seterror] = useState(null)


async function  fetchData() {
    setloading(true)
    try{

        const response = await fetch(url)
        if(!response.ok) throw new Error(response.statusText);

        let result = await response.json()
     if(result) {
        setdata(result)
        seterror(null)
        setloading(false)
     }
        


    } catch(error) {
   console.log(error)
   setloading(false)
    }
}

    useEffect(()=>{
   fetchData()
    },[url])

    return { data, loading, error }
}



export default usefetch