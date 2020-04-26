import React from "react";
import Header from "../header/header.component";
import './symtoms.css'
export default function Symptoms() {
  return (
    <>
    <Header></Header>
    <div className="symptoms">
     
      <div className='corona-info'>
          <p>What Is Covid-19</p>
          <p>Coronavirus</p>
          <p>Corona Viruses Are A Type Of Viruses. There Are Many Different Kinds, And Some Cause Disease. A newly Identified Type SARS-CoV-2 Has Caused A Recent Outbreak Of Respiratory Illness Called COVID-19. </p>
      </div>
      <div className="corona-symp">
          <p>COVID-19</p>
          <p>SYMPTOMS</p>
      </div>
      <div className='img-box'>
          <div className='sym-box'>
              <img src='./covid-img/sneeze.jpg' alt='file' width={'200px'} height={'200px'}></img>
              <p>Sneezing</p>
          </div>
          <div className='sym-box'>
          <img src='./covid-img/fever.jpg' alt='file' width={'200px'} height={'200px'}></img>
              <p>High Fever</p>
          </div>
          <div className='sym-box'>
          <img src='./covid-img/dry-cough.jpg' alt='file' width={'200px'} height={'200px'}></img>
              <p>Dry Cough</p>
          </div>
      </div>
    </div>
    </>
  );
}
