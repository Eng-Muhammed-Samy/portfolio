export default function Picture(props){
    return (
        <img className={props.classList} src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} alt =""/>
    )
}