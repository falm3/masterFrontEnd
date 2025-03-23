// video 3 min 15-16 cuenta lo de los contextos
//otra api 1h 15min 
//https://jsonplaceholder.typicode.com/users?name_like=L
import React from "react";

export const Search: React.FC = () =>{
  const [filter,setFilter] = React.useState("");

  React.useEffect(()=>{

  });



  return (
    <input
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }} />
  );
}

interface Props{
  contenido: JSX.Element;
}

const Componente:React.FC<Props> = (props)=>{
  const {contenido} = props;
  return <><div>{contenido}</div></>
}

