interface Props{
children:React.ReactNode;
}
export default function Main({children}:Props){

return(

<main style={{
padding:"30px",
minHeight:"400px"
}}>

{children}

</main>

)
}