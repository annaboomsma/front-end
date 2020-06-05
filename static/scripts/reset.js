
const sanne = {
    id: "01", 
    firstName: "Sanne", 
    lastName: "Pietersma", 
    gender: "women", 
    sexuality: "Bi-sexual", 
    age: "21"}

const joep = {
    id: "02", 
    firstName: "Joep", 
    lastName: "Jansen", 
    gender: "men", 
    sexuality: "Gay", 
    age: "23"}

const thijs = {
    id: "03", 
    firstName: "Thijs", 
    lastName: "Timmersma", 
    gender: "men", 
    sexuality: "Straight", 
    age: "18"}

const marit = {
    id: "04", 
    firstName: "Marit", 
    lastName: "Maarssen", 
    gender: "women", 
    sexuality: "Bi-sexual", 
    age: "19"}

const lieve = {
    id: "05", 
    firstName: "Lieve", 
    lastName: "Lopke", 
    gender: "women", 
    sexuality: "Gay", 
    age: "20"}

const merel = {
    id: "06", 
    firstName: "Merel", 
    lastName: "Metselsma", 
    gender: "women", 
    sexuality: "Straight", 
    age: "23"}

const robby = {
    id: "07", 
    firstName: "Robby", 
    lastName: "Rovers", 
    gender: "men", 
    sexuality: "Bi-sexual", 
    age: "22"}

const kim = {
    id: "08", 
    firstName: "Kim", 
    lastName: "Kastriek", 
    gender: "women", 
    sexuality: "Gay", 
    age: "21"}

const michiel = {
    id: "09", 
    firstName: "Michiel", 
    lastName: "Meij", 
    gender: "men", 
    sexuality: "Straight", 
    age: "20"}


const users = [sanne, joep, thijs, marit, lieve, merel, robby, kim, michiel]



localStorage.setItem('data', JSON.stringify(users));


console.log(JSON.parse(localStorage.data))