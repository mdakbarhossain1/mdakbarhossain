import Home from './component/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import ContactUs from './component/ContactUs/ContactUs';
import Projects from './component/Projects/Projects';
import Blog from './component/Blog/Blog';
import DetailsPeojets from './component/DetailsProjects/DetailsPeojets';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<DetailsPeojets />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
