function copyDate() {
    var copy = document.getElementById("copyright");
    if (copy) {
        copy.firstChild.nodeValue = (new Date()).getFullYear();
    }
}

window.onload = copyDate;