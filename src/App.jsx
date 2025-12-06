import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className="container">
      <header className="site-header">
        <Link to="/" className="site-title">Notes to Myself</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
