
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBlog from './Component/MyBlog/MyBlog';
import MyBlogPage from './Component/MyBlog/MyBlogPage';
import Latestwork from './Component/LatestWork/Latestwork';

function App() {
  return (
    <div >
        <Latestwork name="OUR LATEST WORK"/>
        <MyBlog name="BLOG POSTS"/>
     <MyBlogPage/>
    </div>
  );
}

export default App;
