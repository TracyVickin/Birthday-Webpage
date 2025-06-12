import { useState } from 'react';
import './App.css';
import Header from './header';
import LoveNote from './loveNote';
import PhotoCarousel from './PhotoCarousel';
import ReasonsWhyILoveYou from './reasonsWhyIloveYou';
import Playlist from './playList';
import Footer from './footer';
import ToastMessage from './toastMessage';

function App() {
  const [started, setStarted] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setPlaySound(true); // Trigger toast sound
  };

  return (
    <div className="App min-h-screen bg-pink-50">
      {!started ? (
        <div className="flex flex-col justify-center items-center h-screen bg-pink-100 text-center p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-pink-700">
            🎂 Happy Birthday, My King!
          </h1>
          <p className="text-lg md:text-xl text-pink-600 mb-6">
            Tap below to begin your surprise 💝
          </p>
          <button
            onClick={handleStart}
            className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
          >
            Tap to Begin 🎉
          </button>
        </div>
      ) : (
        <>
          <ToastMessage playSound={playSound} />
          <Header />
          <LoveNote />
          <PhotoCarousel />
          <ReasonsWhyILoveYou />
          <Playlist />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
