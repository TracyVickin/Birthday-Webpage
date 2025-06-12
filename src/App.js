import './App.css';
import Header from './header';
import LoveNote from './loveNote';
import PhotoCarousel from './PhotoCarousel';
import ReasonsWhyILoveYou from './reasonsWhyIloveYou';
import Playlist from './playList';
import Footer from './footer';



function App() {
  return (
    <div className="App">

    <Header />
    <LoveNote />
    <PhotoCarousel />
    <ReasonsWhyILoveYou />
    <Playlist />
    <Footer />

    </div>
  );
}

export default App;
