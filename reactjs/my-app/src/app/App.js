
import './App.css';
import { LandingPageHeader } from './components/navbar/LandingPageHeader';
import { HeroPage } from './components/HeroPage/HeroPage'
import { Features } from './components/Features';
// import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <LandingPageHeader/>
      <HeroPage/>
      <Features/>
     
    </div>

  );
}

export default App;
