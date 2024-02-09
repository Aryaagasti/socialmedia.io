
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Slidebar from './components/Slidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'


function App() {

  const [selectedTab, setSelectedTab] = useState("Creat Post")

  return (
   <PostListProvider>
     <div className="app-container">
      <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
        <Header/>
        {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
        <Footer/>
      </div>
    </div>
   </PostListProvider>

  )
}

export default App
