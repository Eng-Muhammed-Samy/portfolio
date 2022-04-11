export default function Button(props){
    return(
         <button className={props.styles} onClick={props.action}>{props.value}</button>
    )
}