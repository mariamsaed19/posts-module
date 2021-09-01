import axios  from "axios"
import { useCallback, useEffect, useState } from "react"
import Card from "./components/Card"
function App() {
  //link of api
  const apiUrl="https://jsonplaceholder.typicode.com/posts"
  //save state to re-render component
  const [posts,setState]=useState([]);

  //get request
 const getPosts = useCallback(()=>{ axios.get(apiUrl)
  .then(res => {
    let fields =[]
    res.data.map( post=> {
      // save posts in a list
      fields.push(<Card title={post.title} body={post.body} className="card"/>)
    })
    //re-render component by change its state
    setState(fields)

  })
  },[])

  //to make get request once and avoid loops
  useEffect(()=> getPosts() ,[getPosts])
  return (
   
    <div>
      <h1> Posts </h1>
      <div className="posts"> {posts} </div>
    </div>
  );
}

export default App;
