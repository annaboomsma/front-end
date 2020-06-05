const list = document.querySelector(".list")

const data = JSON.parse(localStorage.data)

const genderFilter = localStorage.genderFilter

const sexualityFilter =localStorage.sexualityFilter

const filterByGender = data.filter((person)=>{
    return person.gender == genderFilter
})

const filteredData = filterByGender.filter((person)=>{
    console.log(sexualityFilter)
    return person.sexuality == sexualityFilter;
    
})

window.onload = newData();

function newData(){
    list.innerHTML = " "

    filteredData.forEach(person => {
        
        const article = document.createElement('article');
        article.className = 'person';
        list.appendChild(article);

        const img = document.createElement('img');
        img.src = `./images/${person.photo}`;
        img.alt = '';
        article.appendChild(img);

        const section = document.createElement('section');
        section.className = 'info';
        article.appendChild(section);

        const name = document.createElement('h2');
        name.textContent = person.firstName;
        section.appendChild(name)

        const basics = document.createElement('ul');
        basics.className = 'basics';
        section.appendChild(basics);

        const age = document.createElement('li')
        age.textContent = `${person.age} years old | `
        basics.appendChild(age)

        const sexualityInfo = document.createElement('li')
        sexualityInfo.textContent = `${person.sexuality}`
        basics.appendChild(sexualityInfo)

        // const specific = document.createElement('ul');
        // basics.className = 'basics';
        // section.appendChild(basics);

        // title.textContent = person.firstName
    });
}


console.log(sexualityFilter)
console.log(filteredData);

