var robloxianName = document.querySelector('.name').innerHTML;
var robloxianHeadshot = document.querySelector('.headshot').src;

document.title = 'Find out how ' + robloxianName + ' became famous | Famous Robloxians';
var desc = 'How did ' + robloxianName + ' become famous? How old is their account? Find out on Famous Robloxians.'
var keyword = 'famous roblox people, roblox, Famous Robloxians, scr1pp3d, '+ robloxianName + ', ' + robloxianName + ' roblox';
document.getElementById("favicon").setAttribute("href", robloxianHeadshot);
document.getElementById("metadesc").setAttribute("content", desc);
document.getElementById("keywords").setAttribute("content", keyword);


function getAge(DOB) {
    var now = new Date();
    var DOB = DOB.replace(/\//g, ',');
    var DOB = DOB.split(',');
    var DOB = [DOB[0], DOB[1], DOB[2]];
    var birthDay = new Date(DOB);
    var age = now.getFullYear() - birthDay.getFullYear();
    var m = now.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDay.getDate())) {
        age--;
    }
    var ageSpan = document.querySelector('.age')
    ageSpan.innerHTML = age + ' years old'

}
var date = document.querySelector('.dob')
var date = date.innerHTML

getAge(date)


function search() {
    var searchInput = document.getElementById('searchInput')
    var searchTerm = searchInput.value

    window.open('../search.html?q=' + searchTerm, "_self");

}