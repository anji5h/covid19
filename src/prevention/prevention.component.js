import React from 'react'
import Header from '../header/header.component'
import './prevention.css'
export default function Prevention() {
    return (
        <>
        <Header></Header>
        <div className='prevention'>
        <div className="corona-symp">
          <p>COVID-19</p>
          <p>PREVENTION</p>
      </div>
      <div className='img-box'>
          <div className='sym-box'>
              <p>1</p>
              <img src='./covid-img/hand-wash.png' alt='file' width={'300px'} height={'250px'}></img>
              <p>Wash Your Hand</p>
          </div>
          <div className='sym-box'>
          <p>2</p>
          <img src='./covid-img/mask.jpg' alt='file' width={'300px'} height={'250px'}></img>
              <p>Use Mask</p>
          </div>
          <div className='sym-box'>
          <p>3</p>
          <img src='./covid-img/stayhome.png' alt='file' width={'300px'} height={'250px'}></img>
              <p>Stay Home</p>
          </div>
      </div>
        </div>
        </>
    )
}
