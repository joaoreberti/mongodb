import React, {useState, useEffect} from "react"

const NewHero = (props) => {
    const [useName, setUseName] = useState(props? props.name : "")
    const [usePowers, setUsePowers] = useState(props ? props.power : "")

    const handleChange = (e) => {
        if(e.target.name==="name"){
            setUseName(e.target.value)
            
        }else{
            setUsePowers(e.target.value)

        }

    }
    
    const addHero = () =>{
        props.addHero(useName, usePowers)
        fetch(window.location.pathname+'add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name :useName, powers: usePowers })

        },
        ).then(() =>{
            
            setUsePowers('')
            setUseName('')
        })
    
        
        
    }

    const editHero = () => {
        fetch(window.location.pathname+'update/'+useName, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({formerName :props.name, formerPowers: props.power, name:useName, power:usePowers })

        },
        )
        props.editHero(useName, usePowers)

    }

    return(
    <div style={{display:"flex" , flexDirection:"column", width: '200px'}}>
        <input value={useName} name = "name" onChange={handleChange}/> Super Hero Name
        <input value={usePowers} name= "superpower" onChange={handleChange}/> SuperPowers
        <button onClick={props.edit ? editHero : addHero} > Add</button>
    </div>)
}

export default NewHero