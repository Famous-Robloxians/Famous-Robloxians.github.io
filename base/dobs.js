popular = {
    
    mrflimflam: {
        name: "mrflimflam",
        title: "YouTuber",
        image: "../images/mrflimflam.png",
        link: "../robloxians/mrflimflam.html"
    },
    lisagaming_YT: {
        name: "lisagaming_YT",
        title: "YouTuber",
        image: "../images/lisagaming_yt.png",
        link: "../robloxians/lisagaming_YT.html"
    },
    MyUsernamesThis: {
        name: "MyUsernamesThis",
        title: "YouTuber",
        image: "../images/MyUsernamesThis.png",
        link: "../robloxians/MyUsernamesThis.html"
    },
    Ammar_Hazem: {
        name: "Ammar_Hanzem",
        title: "Roblox Dev",
        image: "../images/Ammar_Hazem.png",
        link: "../robloxians/Ammar_Hazem.html"
    },
    NewFissy: {
        name: "NewFissy",
        title: "Game Dev",
        image: "../images/NewFissy.png",
        link: "../robloxians/NewFissy.html"
    },
    ProjectSupreme: {
        name: "ProjectSupreme",
        title: "YouTuber",
        image: "../images/ProjectSupreme.png",
        link: "../robloxians/ProjectSupreme.html"
    },
    Rawblocky: {
        name: "Rawblocky",
        title: "Game Dev",
        image: "../images/Rawblocky.png",
        link: "../robloxians/Rawblocky.html"
    },
    firstimpacts: {
        name: "firstimpacts",
        title: "TikToker",
        image: "../images/firstimpacts.png",
        link: "../robloxians/firstimpacts.html"
    }
    
}

popularAll = {
    mrflimflam: {
        name: "mrflimflam",
        title: "YouTuber",
        image: "images/mrflimflam.png",
        link: "robloxians/mrflimflam.html"
    },
    lisagaming_YT: {
        name: "lisagaming_YT",
        title: "YouTuber",
        image: "images/lisagaming_yt.png",
        link: "robloxians/lisagaming_YT.html"
    },
    MyUsernamesThis: {
        name: "MyUsernamesThis",
        title: "YouTuber",
        image: "images/MyUsernamesThis.png",
        link: "robloxians/MyUsernamesThis.html"
    },
    Ammar_Hazem: {
        name: "Ammar_Hanzem",
        title: "Roblox Dev",
        image: "images/Ammar_Hazem.png",
        link: "robloxians/Ammar_Hazem.html"
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
    firstimpacts: {
        name: "firstimpacts",
        title: "TikToker",
        image: "images/firstimpacts.png",
        link: "robloxians/firstimpacts.html"
    }
    
}

featuredAll = {
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

featured = {
    SCR1PP3D: {
        name: "SCR1PP3D",
        title: "Software Developer",
        image: "../icons/favicon.png",
        link: "../featured/SCR1PP3D.html"
    },
    wrekich: {
        name: "wrekich",
        title: "Socialite/Actress/Director",
        image: "../images/wrekich.png",
        link: "../featured/wrekich.html"
    },
    Ginevre: {
        name: "Ginevre",
        title: "Youtuber/Model",
        image: "../images/ginevre.png",
        link: "../featured/ginevrechan.html"
    },
    lilacgamingrblx: {
        name: "lilacgamingrblx",
        title: "300 Subscribed YouTube Star",
        image: "../images/lilacgamingrblx.png",
        link: "../featured/lilacgamingrblx.html"
    },
    VictoriaCatMilo04: {
        name: "VictoriaCatMilo04",
        title: "Robloxian",
        image: "../images/VictoriaCatMilo04.png",
        link: "../featured/VictoriaCatMilo04.html"
    },
    QuinnGamingRBLX_alt: {
        name: "QuinnGamingRBLX_alt",
        title: "YouTuber",
        image: "../images/QuinnGamingRBLX_alt.png",
        link: "../featured/QuinnGamingRBLX_alt.html"
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

if (window.location.href.includes('popular.html')) {
    addAll()
}
else if (window.location.href.includes('robloxians/')) {
    add3()
    addFeatured()
}
else if (window.location.href.includes('featured/')) {
    add3()
    addFeatured()
}
else if (window.location.href.includes('featured.html')) {
    addFeaturedAll()
}



function add3() {
    i = 0;
    while (i < 3) {
        var val = Object.entries(popular)[i][1];
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
    
        row.append(column)
        column.append(a)
        a.append(img)
        a.append(Uname)
        a.append(title)
    
    
        i++
        
    }
}



function addAll() {
    i = 0;
    while (i < Object.entries(popularAll).length) {
        var val = Object.entries(popularAll)[i][1];
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
    
        row.append(column)
        column.append(a)
        a.append(img)
        a.append(Uname)
        a.append(title)

        i++
        
    }
    
    
}


function addFeaturedAll() {
    i = 0;
    var Frow = document.querySelector('.featured .row')
    while (i < Object.entries(featuredAll).length) {
        var val = Object.entries(featuredAll)[i][1];
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
    
        Frow.append(column)
        column.append(a)
        a.append(img)
        a.append(Uname)
        a.append(title)

        i++
        
    }
    
    
}


function addFeatured() {
    i = 0;
    var Frow = document.querySelector('.featured .row')
    while (i < Object.entries(featured).length) {
        var val = Object.entries(featured)[i][1];
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
    
        Frow.append(column)
        column.append(a)
        a.append(img)
        a.append(Uname)
        a.append(title)

        i++
        
    }
    
    
}




/*

<div class="column">
    <a href="robloxians/Rawblocky.html">
        <img src="images/Rawblocky.png" alt="">
        <p>Rawblocky</p>
        <h6>Game Dev</h6>
    </a>
</div>


*/