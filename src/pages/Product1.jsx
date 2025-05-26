import Navbar from "../components/Navbar"
import data from "../../data.json"
import { Link } from "react-router-dom"


export default function Product1(){

    return(

        <>
         <Navbar/>

         <h2 style={{display:'flex', justifyContent:'center', marginTop:'7.5%', width:'100%', color:'palevioletred'}}>Catalogue des produits:</h2>
                        <ul
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin:'0',
    marginLeft: '15%',
    marginRight: '15%',
    padding: 0,
    listStyle: 'none',
  }}
>
  {data.map((item, idx) => (
    <li
      key={idx}
      style={{
        flex: '0 0 32%',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Link to={`/infoproduct/${idx}`}>
        <img src={item.image} alt={item.name} width={300} /><br />
      </Link>
    </li>
  ))}
</ul>
        </>
    )
}