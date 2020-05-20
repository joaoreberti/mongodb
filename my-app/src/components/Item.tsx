import React, {useState, useEffect} from "react"
import NewHero from "./NewHero"


const Item = (props: {delete: React.ReactNode, hero: { name: React.ReactNode; superpower: React.ReactNode } }) => {

    const [useEdit, setEdit] = useState(false)


const handleRemove = () => {
    console.log(props.hero.name);
    fetch(window.location.pathname+'delete/'+props.hero.name, {
        method: 'DELETE',
    }).then(()=> {
        console.log('joao');
        
        props.delete(props.hero.name)})
    
    
}
const handleEdit = () => {
    setEdit(true)
    
}

const handleEditHero = (name, power) => {
    props.editHero(name, power, props.index)
    setEdit(false)

    
}

  useEffect(() => {
      
      return () => {
      }
  }, [setEdit])

    return(
        <>
        {useEdit ? 
        <NewHero editHero = {handleEditHero} edit = {true} name={props.hero.name} power={props.hero.superpower}/>
        : 
        
        <div><h1>{props.hero.name}</h1>
        <h2>{props.hero.superpower}</h2></div>}
        
        <button onClick={handleRemove}> remove</button>
        <button onClick={handleEdit}>Edit</button>
        </>
    )
}

export default Item