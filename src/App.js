import './App.css';
import ImagesSection from './components/ImagesSection';
import Header from './components/Header';
import {Element, Events } from 'react-scroll';
import { useEffect } from 'react';
import Generator from './components/Generator';
import AppContextProvider from './context/AppContext';
import Tarjeta from './components/Tarjeta';

function App() {

  useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');

    // Clean up the scroll event listeners
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <AppContextProvider>
        <Element name="component1" className="element">
          <Header></Header>
        </Element>
        <Element name="component2" className="element">
          <ImagesSection></ImagesSection>
        </Element>
        <Element name="component3" className="element">
          <Generator></Generator>
        </Element>
        <Element name="component4" className="element">
          <Tarjeta></Tarjeta>
        </Element>
      </AppContextProvider>

    </>

  );
}

export default App;
