import './index.css'

const Header=(props)=>{
const {eachItem}=props
const {color,value}=eachItem
return(
<div>{color+" "+value}</div>
)}


export default Header
