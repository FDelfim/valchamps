import './App.css'

function App() {

  const imgs = [
    '../src/img/Breach_Teaser_-_embed_2.gif',
    '../src/img/chamber_teaser_-_embed_5.gif',
    '../src/img/Cypher_Teaser_-_embed_1.gif',
    '../src/img/KAYO_Teaser_-_embed_4.gif',
    '../src/img/Neon_Teaser_-_embed_3.gif',
    '../src/img/Sova_Teaser_-_embed_6.gif',
  ];

  const img = imgs[Math.floor(Math.random() * imgs.length)];

  return (
    <div>
      <div className='col-12 d-flex justify-content-center head-img'>
        <img src={img} alt='random img' className='img col-12 d-flex' />
        <div>
          <h1 className='text-center'>VALCHAMPS</h1>
          <h2 className='text-center'>ACOMPANHE AO VIVO OS PLACARES DOS CAMPEONATOS DE VALORANT</h2>
        </div>
      </div>
    </div>
  )
}

export default App
