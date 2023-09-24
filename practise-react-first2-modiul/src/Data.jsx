export default function Data ({data}){

  const {id,title,body}=data


return(

<div style={{ border: '2px solid tomato',borderRadius:'15px',
margin:'5px',padding:'15px'
}}>
<h4>Id:{id}</h4>
<h4>Title:{title}</h4>
<p>Description:{body}</p>
</div>

)

}