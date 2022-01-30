

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
    Coble3D: {
        name: "Coble3D",
        title: "UI/UX Designer",
        image: "images/Coble3D.png",
        link: "robloxians/Coble3D.html"
    },
    i5k: {
        name: "i5k",
        title: "Graphic Designer",
        image: "images/i5k.png",
        link: "robloxians/i5k.html"
    },
    JavaCreates: {
        name: "JavaCreates",
        title: "Animator",
        image: "images/JavaCreates.png",
        link: "robloxians/JavaCreates.html"
    },
    firstimpacts: {
        name: "firstimpacts",
        title: "TikToker",
        image: "images/firstimpacts.png",
        link: "robloxians/firstimpacts.html"
    },
    MyUsernamesThis: {
        name: "MyUsernamesThis",
        title: "YouTuber",
        image: "images/MyUsernamesThis.png",
        link: "robloxians/MyUsernamesThis.html"
    },
    KonekoKitten: {
        name: "KonekoKitten",
        title: "YouTuber",
        image: "images/KonekoKittenWasTaken.png",
        link: "robloxians/KonekoKitten.html"
    },
    Mr_Booshot: {
        name: "Mr_Booshot",
        title: "YouTuber",
        image: "images/Mr_Booshot.png",
        link: "robloxians/Mr_Booshot.html"
    },
    Cinderbelle: {
        name: "Cinderbelle",
        title: "YouTuber",
        image: "images/Cinderbelle.png",
        link: "robloxians/Cinderbelle.html"
    },
    Roblox_RTC: {
        name: "Roblox_RTC",
        title: "Journalists",
        image: "images/RTCRobloxTwitter.png",
        link: "robloxians/Roblox_RTC.html"
    },
    SCR1PP3D: {
        name: "SCR1PP3D",
        title: "Software Developer",
        image: "icons/favicon.png",
        link: "featured/SCR1PP3D.html"
    },
    wrekch: {
        name: "wrekch",
        title: "Socialite/Actress/Director",
        image: "images/wrekch.png",
        link: "featured/wrekch.html"
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

document.getElementById('searchInput').value = searchTerm;
