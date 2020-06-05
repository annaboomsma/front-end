


const sanne = {
    id: "01", 
    firstName: "Sanne", 
    lastName: "Pietersma", 
    gender: "women", 
    sexuality: "bi-sexual", 
    age: "21",
    photo: "meid.jpg"}

const joep = {
    id: "02", 
    firstName: "Joep", 
    lastName: "Jansen", 
    gender: "men", 
    sexuality: "gay", 
    age: "23",
    photo: "joep.jpg"}

const thijs = {
    id: "03", 
    firstName: "Thijs", 
    lastName: "Timmersma", 
    gender: "men", 
    sexuality: "straight", 
    age: "18",
    photo: "bob.jpg"}

const marit = {
    id: "04", 
    firstName: "Marit", 
    lastName: "Maarssen", 
    gender: "women", 
    sexuality: "bi-sexual", 
    age: "19",
    photo: "merel.jpg"}

const lieve = {
    id: "05", 
    firstName: "Lieve", 
    lastName: "Lopke", 
    gender: "women", 
    sexuality: "gay", 
    age: "20",
    photo: "lara.jpg"}

const merel = {
    id: "06", 
    firstName: "Merel", 
    lastName: "Metselsma", 
    gender: "women", 
    sexuality: "straight", 
    age: "23",
    photo: "kaylee.jpg"}

const robby = {
    id: "07", 
    firstName: "Robby", 
    lastName: "Rovers", 
    gender: "men", 
    sexuality: "bi-sexual", 
    age: "22",
    photo: "robby.jpg"}

const kim = {
    id: "08", 
    firstName: "Kim", 
    lastName: "Kastriek", 
    gender: "women", 
    sexuality: "gay", 
    age: "21",
    photo: "fien.jpg"}

const michiel = {
    id: "09", 
    firstName: "Michiel", 
    lastName: "Meij", 
    gender: "men", 
    sexuality: "straight", 
    age: "20",
    photo: "david.jpg"}


const users = [sanne, joep, thijs, marit, lieve, merel, robby, kim, michiel]



localStorage.setItem('data', JSON.stringify(users));


console.log(JSON.parse(localStorage.data))
