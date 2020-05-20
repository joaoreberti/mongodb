import React, {useState, useEffect} from "react"
import Item from "./Item"
import NewHero from "./NewHero"
const List = () =>{
    const [heroObject, setHeroObject] = useState([])
    let [refresh, setRefresh ] = useState(false)
    
    const handleRemove = (name) => {
        console.log(name);
        console.log(heroObject);
        let newHeroObject = [...heroObject]
        
        newHeroObject.filter((hero, index)=>{
            if( hero.name !== name){
                return 
            }
        })
        setRefresh(true)

        setHeroObject(newHeroObject)

        
        
    }
    const handleAdd = (name, superpower)=>{
        let newHeroObject = [...heroObject]
        newHeroObject.push({name: name, superpower: superpower})
        setHeroObject(newHeroObject)
        setRefresh(true)

    }

    const handleEdit = (name, superpower, index) => {

        let newHeroObject = [...heroObject]
        newHeroObject[index].name = name
        newHeroObject[index].superpower = superpower

        setHeroObject(newHeroObject)

        
        
    }
    
    useEffect(() => {
        console.log('mount')
        fetch(window.location.pathname+'list')
    .then(result => result.json())
    .then(data => setHeroObject(data));
        return () => {
            console.log('unmount')

        }
    }, [refresh])

    return(
        <ul>
            {heroObject.map((hero, index) => <Item editHero = {handleEdit} delete={handleRemove} hero = {hero} index={index} key ={index} />)}
            <NewHero  addHero ={handleAdd} />
        </ul>
    )
}

export default List