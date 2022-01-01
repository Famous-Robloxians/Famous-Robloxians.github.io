function hidePopup(item) {
    item.parentNode.remove();
}


function search() {
    var searchInput = document.getElementById('searchInput')
    var searchTerm = searchInput.value

    window.open('search.html?q=' + searchTerm, "_self");
}

document.getElementById('searchInput').addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".searchButton").click();
    }
});