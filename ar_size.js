/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   START AR    ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//var arMarker1 = document.getElementById("arMarker1")
////arMarker1.style.width
////arMarker1.style.width
//console.log(arMarker1);
//console.log("arMarker1 size : " + arMarker1.clientWidth);
//console.log("arMarker1 size : " + arMarker1.clientHeight);
//
//var arMarker2 = document.getElementById("arMarker2")
////arMarker2.style.width
////arMarker2.style.width
//console.log("arMarker2 size : " + arMarker2.clientWidth);
//console.log("arMarker2 size : " + arMarker2.clientHeight);
//
//
//arMarker1.style.width = "400px";
//
//function getStylePlease(element){
//    var elem = document.getElementById(element);
//    var result = getComputedStyle(elem).width;
//    //var result = getComputedStyle(elem);
//    return result;
//}
//
//console.log(getStylePlease("arMarker1"));
//console.log( getComputedStyle(arMarker1) );
//arMarker1.style.width = "100%";
//console.log( getComputedStyle(arMarker1).width );
//
//var arId = document.getElementById("ar");
//var block0 = arId.getElementsByClassName("block0");
//console.log(block0);
//console.log(block0[0].style);
//
////var arId = documet.getElementById("ar");
//var block1 = arId.getElementsByClassName("block1");
//console.log(block1);
//console.log(block1.length);
//console.log(block1[0]);
//console.log( getComputedStyle(block1[0]) );
//console.log( getComputedStyle(block1[0]).paddingTop );
//console.log( getComputedStyle(block1[0]).width );
//block1[0].style.width = "100%";
//console.log( getComputedStyle(block1[0]).width );

/////////////////////////////////
// function
function styleWidth(elem, x){
    elem.style.width=x;
}
function stylePadding(elem, x1, x2, x3, x4){
    elem.style.paddingTop   =x1;
    elem.style.paddingRight =x2;
    elem.style.paddingBottom=x3;
    elem.style.paddingLeft  =x4;
}
function styleMargin(elem, x1, x2, x3, x4){
    elem.style.marginTop   =x1;
    elem.style.marginRight =x2;
    elem.style.marginBottom=x3;
    elem.style.marginLeft  =x4;
}

// css
var arId = document.getElementById("ar");
arId.style.boxSizing = "border-box";
//#ar *
//{
//    box-sizing: border-box;
//}
var containerClass = arId.getElementsByClassName("container");     //container: length 1
styleWidth(containerClass[0], "100%");       //arId.style.width = "100%";
styleMargin(containerClass[0], "20px", "20px", "20px", "20px");
stylePadding(containerClass[0], "20px", "20px", "20px", "20px");
containerClass[0].style.backgroundColor="rgba(95, 168, 160, 0.5)";
//#ar .container
//{
//    width: 100%;
//    margin: 20px;
//    padding: 20px;
//    background-color: rgba(95, 168, 160, 0.5);
//}
/* #ar .container .block0 */
var block0Class = arId.getElementsByClassName("block0");       //block: length 2
pw=getComputedStyle( containerClass[0] ).width;               //parent width
ppr=getComputedStyle( containerClass[0] ).paddingTop;         // parent padding right ( = left )
w=(pw-ppr*2)/2;
for(var i=0; i<block0Class.length; i++){
    styleWidth(block0Class[i], w);
}
//#ar .block0
//{
//    width: calc( (100% - 20px - 20px)/2);
//    float: left;
//    margin: 10px;
//    padding: 10px;
//}
var block0leftClass = arId.getElemensByClassName("block0 left");
///* #ar .container .clear0.left */
//#ar .clear0.left
//{
//    clear: left;
//}
//
///* #ar .container .block0.blue */
//#ar .block0.blue
//{
//    background-color: rgba(174, 232, 246, 0.6);
//}
//
///* #ar .container .block0.green */
//#ar .block0.green
//{
//    background-color: rgba(0, 255, 0, 0.6);
//}
//
///* #ar .container .block0 .block1 */
//#ar .block1
//{
//    width: calc((100% - 10px - 10px)/2);
//    float: left;
//    margin: 5px;
//    padding: 5px;
//}
//
//#ar .end
//{
//    clear: both;
//}
//
