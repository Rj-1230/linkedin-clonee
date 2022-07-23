import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// In react-router-dom v6, "Switch" is replaced by "Routes"
import './App.css';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import {connect} from 'react-redux';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
         <Routes>
          <Route exact path ='/' element={<Login />}></Route>
          <Route exact path = '/home' element={<><Header /><Home /></>}></Route>
          {/* Rendering multipler elements within one route */}
         </Routes>
      </Router>
    </div>
  );
}


const mapStateToProps = (state)=>{
  return{};
};

const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () => dispatch(getUserAuth()),
});



export default connect (mapStateToProps,mapDispatchToProps)(App);


// redux-thunk, firebase, firebase-tools, redux, redux-toolkit were installed
