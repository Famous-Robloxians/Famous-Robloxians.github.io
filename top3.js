


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


var popSection = document.querySelector('section.popular');

var column = document.createElement('div')
column.classList.add('column')

var a = document.createElement('a')
var img = document.createElement('img')
var Uname = document.createElement('p')
var title = document.createElement('h5')
var row = document.querySelector('.row')

function add3() {
    var pop3 = []
    
    for (let i = 0; i < 3; i++) {
        var newPop = shuffle(Object.entries(popular))[i]
        pop3[i] = newPop;
    }

    pop3.forEach(user => {
        var user = user[1]
        var column = document.createElement('div')
        column.classList.add('column')
    
        var a = document.createElement('a')
        var img = document.createElement('img')
        var Uname = document.createElement('p')
        var title = document.createElement('h5')
    
        a.href = user.link
        img.src = user.image
        Uname.innerHTML = user.name
        title.innerHTML = user.title
    
        row.append(column)
        column.append(a)
        a.append(img)
        a.append(Uname)
        a.append(title)
    });
}

add3()