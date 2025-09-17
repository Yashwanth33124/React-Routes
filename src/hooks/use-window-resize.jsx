import { useLayoutEffect, useState } from "react";



function useWindowResize() {
    const[windowsize,setwindowsize] = useState({
         width: window.innerWidth,  
    height: window.innerHeight
    })


    function handleresize() {
        setwindowsize({
            width:window.innerWidth,
            height:window.innerHeight 
        })
    }
useLayoutEffect(()=>{

    handleresize()
window.addEventListener('resize',handleresize)

return ()=> {
    window.removeEventListener('resize',handleresize)
}

},[])

    return windowsize
}

export default useWindowResize