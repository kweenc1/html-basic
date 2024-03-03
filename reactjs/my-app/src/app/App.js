
import './App.css';
import { LandingPageHeader } from './components/navbar/LandingPageHeader';
import { HeroPage } from './components/HeroPage/HeroPage'
// import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <LandingPageHeader></LandingPageHeader>
      {/* <Logo /> */}
      <div>
        <HeroPage></HeroPage>
      </div>
    </div>

  );
}

export default App;
