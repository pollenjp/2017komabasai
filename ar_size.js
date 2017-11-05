var arMarker1 = document.getElementById("arMarker1")
//arMarker1.style.width
//arMarker1.style.width
console.log("arMarker1 size : " + arMarker1.clientWidth);
console.log("arMarker1 size : " + arMarker1.clientHeight);

var arMarker2 = document.getElementById("arMarker2")
//arMarker2.style.width
//arMarker2.style.width
console.log("arMarker2 size : " + arMarker2.clientWidth);
console.log("arMarker2 size : " + arMarker2.clientHeight);


arMarker1.style.width = "400px";

function getStylePlease(element){
    var elem = document.getElementById(element);
    var result = getComputedStyle(elem).width;
    //var result = getComputedStyle(elem);
    return result;
}

console.log(getStylePlease("arMarker1"));
