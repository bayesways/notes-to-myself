import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div className="container">
      <header className="site-header">
        <Link to="/" className="site-title">My Retro Blog</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} My Retro Blog. Built with Vite & React.</p>
      </footer>
    </div>
  );
}

export default App;
