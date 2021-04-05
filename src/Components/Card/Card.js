import Button from 'react-bootstrap/Button';
import React from 'react';

const Card = () => {
    return (
      <div className="container">
          <div className="row pt-5">
              <div className="col-md-4">
                  <img src="" alt=""/>
                  <h4>This is a title</h4>
                  <div className="row">
                      <div className="col-md-6">
                          <h4>$ 234</h4>
                      </div>
                      <div className="col-md-6">
                          <button >By Now</button>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <img src="" alt=""/>
                  <h4>This is a title</h4>
                  <div className="row">
                      <div className="col-md-6">
                          <h4>$ 234</h4>
                      </div>
                      <div className="col-md-6">
                          <button>By Now</button>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <img src="" alt=""/>
                  <h4>This is a title</h4>
                  <div className="row">
                      <div className="col-md-6">
                          <h4>$ 234</h4>
                      </div>
                      <div className="col-md-6">
                          <button>By Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Card;