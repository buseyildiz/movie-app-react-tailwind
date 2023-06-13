
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero Section/HeroSection';
import MoviesSection from './Components/MoviesSection/MoviesSection';
import { ContextProvider } from './Context/Context';


function Home() {
  return (
    <>
      <ContextProvider>
        <Header/>
        <HeroSection/>
        <MoviesSection/>
        <Footer/>
      </ContextProvider>
     
    </>
  );
}

export default Home;
