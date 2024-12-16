import players from "../players"
import CardPlayer from "./CardPlayer"

const ListPlayers=()=>{
    return(
        <div id="Cards">
            {
                players.map((el,i,t)=> <CardPlayer el={el}/>)
            }
        </div>
    )
}

export default ListPlayers