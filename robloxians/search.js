

var url = window.location.toString();
searchAr = url.split("=");
var searchTerm = searchAr[1];
console.log(searchTerm)

document.title = searchTerm + ' | Famous Robloxians';



all = {
    Ammar_Hazem: {
        name: "Ammar_Hanzem",
        title: "Roblox Dev",
        image: "images/Ammar_Hazem.png",
        link: "robloxians/Ammar_Hazem.html"
    },
    lisagaming_YT: {
        name: "lisagaming_YT",
        title: "YouTuber",
        image: "images/lisagaming_yt.png",
        link: "robloxians/lisagaming_YT.html"
    },
    mrflimflam: {
        name: "mrflimflam",
        title: "YouTuber",
        image: "images/mrflimflam.png",
        link: "robloxians/mrflimflam.html"
    },
    NewFissy: {
        name: "NewFissy",
        title: "Game Dev",
        image: "images/NewFissy.png",
        link: "robloxians/NewFissy.html"
    },
    ProjectSupreme: {
        name: "ProjectSupreme",
        title: "YouTuber",
        image: "images/ProjectSupreme.png",
        link: "robloxians/ProjectSupreme.html"
    },
    Rawblocky: {
        name: "Rawblocky",
        title: "Game Dev",
        image: "images/Rawblocky.png",
        link: "robloxians/Rawblocky.html"
    },
    SCR1PP3D: {
        name: "SCR1PP3D",
        title: "Software Developer",
        image: "icons/favicon.png",
        link: "featured/SCR1PP3D.html"
    },
    wrekich: {
        name: "wrekich",
        title: "Socialite/Actress/Director",
        image: "images/wrekich.png",
        link: "featured/wrekich.html"
    },
    Ginevre: {
        name: "Ginevre",
        title: "Youtuber/Model",
        image: "images/ginevre.png",
        link: "featured/ginevrechan.html"
    },
    lilacgamingrblx: {
        name: "lilacgamingrblx",
        title: "300 Subscribed YouTube Star",
        image: "images/lilacgamingrblx.png",
        link: "featured/lilacgamingrblx.html"
    },
    VictoriaCatMilo04: {
        name: "VictoriaCatMilo04",
        title: "Robloxian",
        image: "images/VictoriaCatMilo04.png",
        link: "featured/VictoriaCatMilo04.html"
    },
    QuinnGamingRBLX_alt: {
        name: "QuinnGamingRBLX_alt",
        title: "YouTuber",
        image: "images/QuinnGamingRBLX_alt.png",
        link: "featured/QuinnGamingRBLX_alt.html"
    },
}

columnNum = 0;


var popSection = document.querySelector('section.popular');


var column = document.createElement('div')
column.classList.add('column')

var a = document.createElement('a')
var img = document.createElement('img')
var Uname = document.createElement('p')
var title = document.createElement('h5')
var row = document.querySelector('.row')

i = 0;
while (i < Object.entries(all).length) {
    var val = Object.entries(all)[i][1];
    var column = document.createElement('div')
    column.classList.add('column')

    var a = document.createElement('a')
    var img = document.createElement('img')
    var Uname = document.createElement('p')
    var title = document.createElement('h5')

    a.href = val.link
    img.src = val.image
    Uname.innerHTML = val.name
    title.innerHTML = val.title

    var info = document.createElement('div')
    info.classList.add('info')

    popSection.append(column)
    column.append(a)
    a.append(img)
    a.append(info)
    info.append(Uname)
    info.append(title)

    i++
}

var allContent = document.querySelector('.allContent').children;

var column = document.querySelectorAll('.allContent .column')

for (i = 0; i < column.length; i++) {
    if (!column[i].textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        column[i].remove();
    }
}