import { useState } from 'react'
import "./App.css"
import logo from "./assets/react.svg"
import globe from "./assets/worldwide.png"


function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <Post
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "Aditya",
      subtitle: "20K followers",
      time: "2m ago",
      image: globe,
      description: "Want to know how i fucked my entire internship chances at texas. Check out the video. Thank YOU"
    }])
  }


  return (
    <div id='top-container'>
      <div id='container'>
        {postComponents}
      </div>
      <button onClick={addPost}>Click here</button>
    </div>
  )
}

function Post({name, subtitle, time, image, description}) {
  return (
    <div id='post-container'>
      <div id='post-header'>
        <div id='profile-pic'>
          <img src={logo}/>
        </div>
        <div id='profile-data'>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && <div id='time'>
            {time}
            <img src={image}/>
          </div>}
        </div>
      </div>
      <div id='post-description'>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default App
