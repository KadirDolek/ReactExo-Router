import { useParams } from "react-router-dom"
import data from "../../data.json"

export default function Info() {
    const { id } = useParams()
    const item = data[id]

    return (
        <>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', height:'100vh'}}>
            <h2>Nom : {item.name}</h2>
                <img src={item.image} width={200} />
            <p style={{fontSize:'30px'}}>Prix : {item.prix} €</p>
        </div>
            
        </>
    )
}