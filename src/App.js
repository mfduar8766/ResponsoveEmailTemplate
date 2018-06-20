import React, { Component } from 'react';

import logo from './img/fenderheader.jpeg';
import Social from './Social';
import GC from './img/GC.png';
import AMP from './img/amp.jpg';
import Pedal from './img/pedal.jpg';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="jumbotron jumbotron-fluid text-center">
        <img className="float-left m-3" id="gc" src={GC} alt=""/>
            <h3 className="text-white">We got the Gear you're Looking for</h3>
        </div>
        <div>
          <h3 className="text-danger h1">Our 4th of July</h3>
          <h3 className="text-primary h1">Specials</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg  p-3">
            <div className="card text-center">
              <img className="card-img-top" src={logo} alt="" />
              <div className="card-header">
                Featured Products
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger h3">10% off ANY purchase of $200 </h5>
                <p className="card-text font-weight-bold">Take advantage of this great deal. Shop new and used gear.</p>
                <a href="" className="btn btn-primary">Shop Now</a>
              </div>
              <div className="card-footer text-muted">
                <Social />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg p-3">
            <div className="card text-center">
              <img className="card-img-top" src={AMP} alt="" />
              <div className="card-header font-weight-bold">
                Your tone is what makes you different
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger h3">Great Tone you can't get anywhere else!</h5>
                <p className="text-danger h3">20% off $500 or greater</p>
                <p className="card-text font-weight-bold">Customize your sound with our latests amps, cabinets, and amp heads.</p>
                <a href="" className="btn btn-primary">Shop Now</a>
              </div>
              <div className="card-footer text-muted">
                <Social />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg p-3">
            <div className="card text-center">
              <img className="card-img-top" src={Pedal} alt="" />
              <div className="card-header font-weight-bold">
                A Musician's Must Have
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger h3">10% off ALL our latests pedals</h5>
                <p className="card-text font-weight-bold">We got the gear for that sound you're looking for.</p>
                <a href="" className="btn btn-primary">Shop Now</a>
              </div>
              <div className="card-footer text-muted">
                <Social />
              </div>
            </div>
          </div>
        </div>
        <footer className=" bg-danger text-white h4 mt-5 text-center h2">
          Copyright &copy; Guitar Center {new Date().getFullYear()}
        </footer>
      </div>
    );
  }
}

export default App;
