
var robloxianName = document.querySelector('.name').innerHTML;
var robloxianHeadshot = document.querySelector('img').src;

document.title = 'Find out how ' + robloxianName + ' became famous | Famous Robloxians';
var desc = 'How did ' + robloxianName + ' become famous? How old is their account? Find out on Famous Robloxians.'
var keyword = 'famous roblox people, roblox, Famous Robloxians, scr1pp3d, '+ robloxianName + ', ' + robloxianName + ' roblox';
document.getElementById("favicon").setAttribute("href", robloxianHeadshot);
document.getElementById("metadesc").setAttribute("content", desc);
document.getElementById("keywords").setAttribute("content", keyword);


function search() {
    var searchInput = document.getElementById('searchInput')
    var searchTerm = searchInput.value

    window.open('../search.html?q=' + searchTerm, "_self");

}

