import { useEffect, useRef } from "react"


function Hooks() {

    const countvalue = useRef(0)
    let divElement = useRef()
    let inputRef = useRef()

    function handleclick() {
        countvalue.current++
        console.log(countvalue.current)
    }
useEffect(()=>{
    inputRef.current.focus()
 let getinfo = divElement.current    
 console.log(getinfo)

 getinfo.style.color = "red"
 setTimeout(()=>{
    getinfo.style.color = "skyblue"
 },1000)
},[])



    return(
        <div>
   <h1>
    use Ref,use callback and use memo
   </h1>
   <button onClick={handleclick}>
    click me
   </button>
   <div ref={divElement}>
    Some Random text
   </div>
   <input name="name"  placeholder="Enter Your Name" ref={inputRef}/>
        </div>
    )
}

export default Hooks