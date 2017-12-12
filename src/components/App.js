import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import store from '../reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper" >
          <Header />
          <MainContent />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
