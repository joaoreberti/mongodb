import * as express from "express"
import * as path from "path"
import * as mongoose from "mongoose"
import * as cors from "cors"
import * as bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, './my-app/build')));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index.html'))

app.listen(port, () => console.log('Listening on 3000')
)


app.get('/list', (req, res) => {

    let arrayOfSuperheroes = []
    console.log(arrayOfSuperheroes)

    Hero.find()
    .then(data => {
        console.log(data)
        data.map(hero => arrayOfSuperheroes.push(hero))
        res.send(arrayOfSuperheroes)

    })
    .catch(err => console.log(err))
    console.log(arrayOfSuperheroes)

})

app.delete('/delete/:hero', (req, res)=>{
    Hero.remove({name: req.params.hero}, result => {
        res.send(200)
         console.log(result)})
    Hero.find().then(result => console.log(result))
    
})

app.post('/add', (req,res)=>{
        let name = req.body.name
    let superpower = req.body.powers

    console.log(name)
    console.log(superpower);
    

    Hero.create({
        name: name,
        superpower: superpower
    }, (err, hero)=>{
        if (err) return console.log(err);
        
    })

    res.send(200)

})

app.put('/update/:hero', (req, res)=>{
    let formerName = req.body.formerName
    let formerPowers = req.body.formerPowers
    let name = req.body.name
    let superpower = req.body.powers
    Hero
    .find({ name: formerName, superpower : formerPowers })
    .update({name: name, superpower: superpower}).then(result => result)
    
})

mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
    .then(result => 
        {
        }
        
        )
    .catch(err => {

        console.log(err)
    })


const heroSchema = mongoose.Schema({
    name: String,
    superpower: String,
})
var Hero = mongoose.model('Hero', heroSchema);


/* Hero.create({
    name:'superman',
    superpower: 'powers from space'
}, (err, hero)=>{
    if (err) return console.log(err);
    
})

Hero.create({
    name:'spiderman',
    superpower: 'powers from spidey'
}, (err, hero)=>{
    if (err) return console.log(err);
    
})

Hero.create({
    name:'batman',
    superpower: 'powers from wealth'
}, (err, hero)=>{
    if (err) return console.log(err);
    
}) */








