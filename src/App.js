import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainContainer from './containers/MainContainer';
import './App.css';

class App extends React.Component {
  
  componentDidMount() {
  }
  
  render() {
    return (
      <div className="App" id="top">
        <HelmetProvider>
          <Helmet>
          </Helmet>
          <MainContainer></MainContainer>
        </HelmetProvider>
      </div>
    );
  }
}
export default App;
