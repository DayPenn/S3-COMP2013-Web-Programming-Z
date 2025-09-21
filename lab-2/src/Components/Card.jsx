   // logic = rating>4stars = rating font = GREEN : RED
    // {/*props.rating ? "Card-Component RatedAbove4 " : "Card-Component"}>*/
    // <h3> {props.goodRating ? className = "Card-goodRating": className = "Card-badRating"}</h3>
//  <h3 style = {color: {props.goodRating ? green : red }}>{props.rating}</h3>


 export default function Card(props){
    return( 
    <div className = "Card-Component">
        <img src={props.image} alt="" width = "100px" />
        <h2 className = "Location-Header">{props.location}</h2>
        <h3>{props.resort}</h3>
        <p className = {props.goodRating ? "goodRating" : "badRating"}>{props.rating}</p>
        <p>{props.price}</p>
    </div>
    );
}   