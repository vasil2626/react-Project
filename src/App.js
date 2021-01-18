import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ToDo from './Components/Pages/ToDo/ToDo';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import SingleTask from './Components/Pages/SingleTask/SingleTask';
import PageNot from './Components/Pages/NotfoundPage/PageNot';
import NavMenue from './Components/NavBar/Navbar';
import Contacts from './Components/Pages/Contact/Contact';
import FooterPage from '../src/Components/Footer/Footer';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {

  let { errorMessage, successMessage, loading } = props;

  if (errorMessage) {
    toast.error(errorMessage);
  }
  if (successMessage) {
    toast.success(successMessage)
  }

  return (
    <div className='pageContainer'>

      <div className='pageWrapper'>



        <NavMenue />

        <Switch>

          <Route path='/' exact component={ToDo} />
          <Route path="/task" exact component={ToDo} />
          <Route path='/about' exact component={AboutUs} />
          <Route path='/contact' exact component={Contacts} />
          <Route path="/task/:id" exact component={SingleTask} />
          <Route to='/404' exact component={PageNot} />
          <Redirect to='/404' />

        </Switch>

      </div>


      <ToastContainer
        position="bottom-left"
        transition={Flip}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      { loading &&
        <div className='spinerpos'>
          <Spinner animation="border" variant="warning" />
        </div>
      }
      <FooterPage />
    </div>
  );

}

let mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    successMessage: state.successMessage,
    loading: state.loading
  }
}


export default connect(mapStateToProps)(App);
