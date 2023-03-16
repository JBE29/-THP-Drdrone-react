import './App.css';
import './assets/style.css';
import axios from "axios";
import Posts from './pages/posts';
import Home from './pages/homepage';
import Footer from './components/Footer/Footer';
import {useEffect, useState} from "react";

const API_URL = "http://localhost:3000/api/posts";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPosts(items);
      }
    });
    return () => { (mounted = false) };
  }, []);

  return (
    <div className="App">
      <Home />
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
