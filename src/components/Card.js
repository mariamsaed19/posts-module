import './Card-style.css'
function Card(props){
    const classes = "container "+props.className
    return(
        <div className={classes}>
            <h2 className="title-holder"> {props.title} </h2>
            <div className="body-holder"> {props.body} </div>
        </div>
    );
}
export default Card;