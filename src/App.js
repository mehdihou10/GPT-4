import {Blog,Features,Footer,Header,Possibility,WhatGPT4} from './containers';
import {Brand,CTA,Navbar} from './components';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='bg__gradient'>

        <Navbar />
        <Header />

      </div>

      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
