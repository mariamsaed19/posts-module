import axios  from "axios"
import { useCallback, useEffect, useState } from "react"
import Card from "./components/Card"
function App() {
  const apiUrl="https://jsonplaceholder.typicode.com/posts"
  const [posts,setState]=useState([]);
 const getPosts = useCallback(()=>{ axios.get(apiUrl)
  .then(res => {
    let fields =[]
    res.data.map( post=> {
      fields.push(<Card title={post.title} body={post.body} className="card"/>)
    })
    setState(fields)

  })
  },[])

  useEffect(()=> getPosts() ,[getPosts])
  return (
    <div>
     {posts}
    </div>
  );
}

export default App;
