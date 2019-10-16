import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

import rootReducer from './reducers';
import Main from './main';

import 'antd/dist/antd.min.css';
import './styles/style.css';

export const store = createStore(rootReducer, applyMiddleware(thunk));


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  updateDimensions = () => {
    const {width: oldWidth} = this.state;

    if (oldWidth !== window.innerWidth) this.setState({width: window.innerWidth});
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
