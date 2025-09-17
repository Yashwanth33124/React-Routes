import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div>Home Page</div>
        <ul style={{display:"flex",gap:"20px",listStyle:"none"}}>
             <li>Recipe</li>
             <li>comments</li>
        </ul>
      </header>
    </div>
  )
}

export default Header
