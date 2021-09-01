import './Card-style.css'
function Card(props){
    // add clases from parent component
    const classes = "container "+props.className
    return(
        <div className={classes}>
            <div className="title-holder">
                <h3> Title : </h3>
                <h4>{props.title} </h4>
            </div>
            <div className="body-holder"> {props.body} </div>
        </div>
    );
}
export default Card;