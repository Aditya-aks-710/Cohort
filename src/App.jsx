import { useState } from 'react'
import "./App.css"
import logo from "./assets/react.svg"
import globe from "./assets/worldwide.png"
function App() {
  return (
    <div id='top-container'>
      <div id='container'>
        <Post
        name={"Aditya"}
        subtitle={"20K followers"}
        time={"2m ago"}
        image={globe}
        description={"Please use me as I am trending these days. Use me as much as you can and make me outdated. After that you have to learn another framework to get a job. Have fun coding. Thank you."}
        />
      </div>
      <div id='container'>
        <Post
        name={"Sneha"}
        subtitle={"30K followers"}
        time={"5m ago"}
        image={globe}
        description={"Please use me as I am trending these days. Use me as much as you can and make me outdated. After that you have to learn another framework to get a job. Have fun coding. Thank you."}
        />
      </div>
      <div id='container'>
        <Post
        name={"Aditya"}
        subtitle={"20K followers"}
        time={"2m ago"}
        image={globe}
        description={"Please use me as I am trending these days. Use me as much as you can and make me outdated. After that you have to learn another framework to get a job. Have fun coding. Thank you."}
        />
      </div>
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
          <div id='time'>
            {time}
            <img src={image}/>
          </div>
        </div>
      </div>
      <div id='post-description'>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default App
