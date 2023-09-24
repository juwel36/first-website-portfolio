export default function Singer ({singer}){

return(
<div style={{ border: '2px solid tomato',borderRadius:'15px',
margin:'5px',
}}>
<p>player details: {singer.name?singer.name:'not found'}</p>
<p>player details: {singer.age? singer.age:5}</p>

</div>
)
}