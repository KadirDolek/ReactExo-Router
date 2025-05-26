import Navbar from "../components/Navbar"
import data from "../../data.json"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Product1() {
  const [carte, setCarte] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCarte(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <h2 style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '7.5%',
        marginBottom: '10%',
        width: '100%',
        color: 'palevioletred'
      }}>
        Catalogue des produits:
      </h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '0 auto',
          padding: 0,
          listStyle: 'none',
          maxWidth: '1200px'
        }}
      >
        {data.map((item, idx) => (
          <li
            key={idx}
            style={{
              flex: '0 0 32%',
              boxSizing: 'border-box',
              marginBottom: '30px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {carte ? (
              <div className="card" style={{
                width: '100%',
                minWidth: '250px',
                maxWidth: '350px',
                height: '270px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                color: '#aaa',
                fontSize: '1.5rem',
                border: '1px solid #eee'
              }}>
                Chargement...
              </div>
            ) : (
              <div className="card" style={{
                width: '100%',
                minWidth: '250px',
                maxWidth: '350px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'contain',
                    background: '#fff'
                  }}
                />
                <div className="card-body" style={{ width: '100%', textAlign: 'center' }}>
                  <h5 className="card-title">{item.name}</h5>
                  <p style={{fontWeight:'bold', fontSize:'20px', color:'palevioletred'}} className="card-text">{item.prix}€</p>
                  <Link to={`/infoproduct/${idx}`}>
                    <button style={{borderRadius:'25px',backgroundColor:'DarkSeaGreen', border:'none', width:'70%'}}>
                      Cliquez pour les détails
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}



