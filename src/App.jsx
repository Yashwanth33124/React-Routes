import React from 'react'
import Recipes from './pages/recipes'
import Comments from './pages/comments'
import { useRoutes, useNavigate, Link } from 'react-router-dom'
import RecipeDetails from './pages/recipe-details'
import NotFound from './pages/not-found'
import Layout from './component/layouts'
import ReactHookform from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import Memo from './pages/hooks/memo'
import ReactQuery from './react-query'


const App = () => {
  let navigate = useNavigate()


  const routes = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "Recipe-list", element: <Recipes /> },
        { path: "comment-list", element: <Comments /> },
        { path: "Recipe-list/:id", element: <RecipeDetails /> }
       
      ]
    },
    { path: "*", element: <NotFound /> },
    {
        path: "react-hook-form", element: <ReactHookform /> 
    },
    {
      path:"hook",element:<Hooks/>
    },
    {
      path:"memo" , element:<Memo/>
    },
    {
      path:"reactquery" , element:<ReactQuery/>
    }
  ]);

  return (

  
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '20px',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}
    >
      {/* <div>
        <Link to="/home/Recipe-list">Click here!!!!</Link>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => navigate("/home/Recipe-list")}
          style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }}
        >
          Navigate to Recipe List
        </button>

        <button
          onClick={() => navigate("/home/comment-list")}
          style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }}
        >
          Navigate to Comments List
        </button>
      </div> */}

      {/* <h1>React Routing with useRoutes</h1> */}

      
      <div style={{ width: '100%', maxWidth: '800px' }}>
        {routes}
       </div>
    </div>
  )
}

export default App
