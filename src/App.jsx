import './App.css'
import { useState } from 'react';

function App() {

  const imgs = [
    '../src/imgs/Breach_Teaser_-_embed_2.gif',
    '../src/imgs/chamber_teaser_-_embed_5.gif',
    '../src/imgs/Cypher_Teaser_-_embed_1.gif',
    '../src/imgs/KAYO_Teaser_-_embed_4.gif',
    '../src/imgs/Neon_Teaser_-_embed_3.gif',
    '../src/imgs/Sova_Teaser_-_embed_6.gif',
  ];

  const championships = [
    {id: 1,name: 'Championship Series',image: '../src/imgs/Championships/CS.png'},
    {id: 3, name: 'Masters Series', image: '../src/imgs/Championships/MS.png'},
    {id: 4, name: 'Last Chance Qualifier',image: '../src/imgs/Championships/LCQ.png'}
  ];

  const img = imgs[Math.floor(Math.random() * imgs.length)];


  return (
    <>
      <div className='col-12 d-flex justify-content-center head-img'>
        <img src={img} alt='random img' className='img col-12 d-flex' />
        <div>
          <h1 className='text-center'>VALCHAMPS</h1>
          <h2 className='text-center'>ACOMPANHE AO VIVO OS PLACARES DOS CAMPEONATOS DE VALORANT</h2>
        </div>
      </div>
      <div>
        <h1 className='text-center'>CAMPEONATOS</h1>
        <div className='d-flex justify-content-center flex-wrap'>
          {championships.map((championship) => (
            <div className='card col-lg-3 col-10 col-md-4 m-3' key={championship.id}>
              <img src={championship.image}/>
              <div className='card-body d-flex flex-column justify-content-center'>
                <h5 className='card-title text-center'>{championship.name}</h5>
                <a href='#' className='btn btn-secondary'>
                  Acompanhar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
