import { useState } from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Content from './components/Main/Content';
import Footer from './components/Footer/Footer';
import Lesson4 from './lessons/Lesson4/Lesson4';
import Lesson6 from './lessons/Lesson6/Lesson6';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Content count={count} setCount={setCount} /> */}
      {/* <Lesson4 /> */}
      <Lesson6 />
      <Footer />
    </div>
  );
};

export default App;
