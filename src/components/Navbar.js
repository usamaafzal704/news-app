// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import image from './brand.png'

export default class Navbar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: 'red', fontWeight:'600',}} href="/"><h3 style={{margin:'0'}}><img src={image} style={{width: '5rem',position: 'relative', right: '-10px',top: '-4px'}} />NewsBites</h3></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                    <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                    <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                    <li className="nav-item"><a className="nav-link" href="/sciences">Sciences</a></li>
                    <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                    <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
                </ul> */}
                </div>
            </div>
        </nav>

      </div>
    )
  }
}



