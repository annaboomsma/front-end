function valueGender(){
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    localStorage.setItem('genderFilter', gender);
    
    console.log(localStorage.genderFilter)
}
function valueSexuality(){
    const sexuality = document.querySelector('input[name="sexuality"]:checked').value;
    localStorage.setItem('sexualityFilter', sexuality);
    console.log(localStorage.sexualityFilter)
}
