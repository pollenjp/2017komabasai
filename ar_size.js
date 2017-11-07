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
/********************************************************
  *******************************************************
  *******************************************************/
// css
var arId = document.getElementById("ar");
arId.style.boxSizing = "border-box";
//#ar *
//{
//    box-sizing: border-box;
//}
var containerClass = arId.getElementsByClassName("container");     //container: length 1
styleMargin(containerClass[0], "20px", "20px", "20px", "20px");
stylePadding(containerClass[0], "20px", "20px", "20px", "20px");
containerClass[0].style.backgroundColor="rgba(95, 168, 160, 0.5)";
pw = Number( getComputedStyle( document.body ).width.split("p")[0] );
cmr = 20;                                                       // Current MarginRight
cw = (pw -2*cmr).toString() + "px";                             // Current Width
styleWidth(containerClass[0], cw);                          //arId.style.width = "100%";
//#ar .container
//{
//    width: 100%;
//    margin: 20px;
//    padding: 20px;
//    background-color: rgba(95, 168, 160, 0.5);
//}
/******************************************************************
 ****************** #ar--.container--.block0 **********************
 ******************************************************************/
if( window.matchMedia('(max-width:450px)').matches ){
    // smart phone
    //@media only screen and (max-width: 450px) {
    //    /* #ar .container .block0 */
    //    #ar .block0
    //    {
    //        width: calc( 100% - 20px - 20px );
    //    }
    //}
    var block0Class = arId.getElementsByClassName("block0");        //block: length 2
    ps = getComputedStyle( containerClass[0] );                     // Parent Style // parent="#ar .container"
    pw = Number(ps.width.split("p")[0]);                            // Parent Width
    pmr = Number(ps.marginRight.split("p")[0]);                     // Parent MarginRight
    ppr = Number(ps.paddingRight.split("p")[0]);                    // Parent PaddingRight
    styleMargin(containerClass[0], "10px", "10px", "10px", "10px");
    cmr = 10;                                                       // Current MarginRight
    cw = (pw -2*cmr -2*ppr).toString() + "px";                      // Current Width
    for(var i=0; i<block0Class.length; i++){
        styleWidth(block0Class[i], cw);
        block0Class[i].style.float = "left";
    }
} else if(window.matchMedia('(max-width:1000px)').matches ){
    //@media only screen and (max-width: 1000px) {
    //    /* #ar .container .block0 */
    //    #ar .block0
    //    {
    //        width: calc( 100% - 20px - 20px );
    //    }
    //}
    var block0Class = arId.getElementsByClassName("block0");        //block: length 2
    ps = getComputedStyle( containerClass[0] );                     // Parent Style // parent="#ar .container"
    pw = Number(ps.width.split("p")[0]);                            // Parent Width
    pmr = Number(ps.marginRight.split("p")[0]);                     // Parent MarginRight
    ppr = Number(ps.paddingRight.split("p")[0]);                    // Parent PaddingRight
    cw = (pw -2*pmr -2*ppr).toString() + "px";                      // Current Width
    for(var i=0; i<block0Class.length; i++){
        styleWidth(block0Class[i], cw);
        block0Class[i].style.float = "left";
    }
} else {
    //#ar .block0
    //{
    //    width: calc( (100% - 20px - 20px)/2);
    //    float: left;
    //    margin: 10px;
    //    padding: 10px;
    //}
    var block0Class = arId.getElementsByClassName("block0");        //block: length 2
    ps = getComputedStyle( containerClass[0] );                     // Parent Style // parent="#ar .container"
    pw = Number(ps.width.split("p")[0]);                            // Parent Width
    pmr = Number(ps.marginRight.split("p")[0]);                     // Parent MarginRight
    ppr = Number(ps.paddingRight.split("p")[0]);                    // Parent PaddingRight
    cw = ((pw-2*pmr-ppr*2)/2).toString() + "px";                          // Current Width
    for(var i=0; i<block0Class.length; i++){
        styleWidth(block0Class[i], cw);
        block0Class[i].style.float = "left";
    }
}

var clear0leftClass = arId.getElementsByClassName("clear0 left");
clear0leftClass[0].style.clear="left";
///* #ar .container .clear0.left */
//#ar .clear0.left
//{
//    clear: left;
//}
var block0BlueClass = arId.getElementsByClassName("block0 blue");
block0BlueClass[0].style.backgroundColor = "rgba(174, 232, 246, 0.6)";
///* #ar .container .block0.blue */
//#ar .block0.blue
//{
//    background-color: rgba(174, 232, 246, 0.6);
//}
var block0GreenClass = arId.getElementsByClassName("block0 green");
block0GreenClass[0].style.backgroundColor = "rgba(0, 255, 0, 0.6)";
///* #ar .container .block0.green */
//#ar .block0.green
//{
//    background-color: rgba(0, 255, 0, 0.6);
//}
/***********************************************************
 *************** #ar .container .block0 .block1 ***********
 **********************************************************/
if( window.matchMedia('(max-width:450px)').matches ){
    // Smart Phone
    //@media only screen and (max-width: 450px) {
    //    /* #ar .container .block0 .block1 */
    //    #ar .block1
    //    {
    //        width: calc( 100% - 20px - 20px );
    //    }
    //}
    var block1Class = arId.getElementsByClassName("block1");
    ps = getComputedStyle( block0Class[0] );                        // Parent Style // parent="#ar .block0"
    pw = Number(ps.width.split("p")[0]);                            // Parent Width
    pmr = Number(ps.marginRight.split("p")[0]);                     // Parent MarginRight
    ppr = Number(ps.paddingRight.split("p")[0]);                    // Parent PaddingRight
    cw = (pw -2*pmr- 2*ppr).toString() + "px";                           // Current Width
    for(var i=0; i<block1Class.length; i++){
        styleWidth(block1Class[i], cw );
        block1Class[i].style.float = "left";
        styleMargin(block1Class[i], "5px", "5px", "5px", "5px");
        stylePadding(block1Class[i], "5px", "5px", "5px", "5px");
        block1Class[i].style.float = "left";
    }
} else {
    // Tablet, PC
    //#ar .block1
    //{
    //    width: calc((100% - 10px - 10px)/2);
    //    float: left;
    //    margin: 5px;
    //    padding: 5px;
    //}
    var block1Class = arId.getElementsByClassName("block1");
    ps = getComputedStyle( block0Class[0] );                        // Parent Style // parent="#ar .block0"
    pw = Number(ps.width.split("p")[0]);                            // Parent Width
    pmr = Number(ps.marginRight.split("p")[0]);                     // Parent MarginRight
    ppr = Number(ps.paddingRight.split("p")[0]);                    // Parent PaddingRight
    cw = ((pw-2*pmr-ppr*2)/2).toString() + "px";                          // Current Width
    for(var i=0; i<block1Class.length; i++){
        styleWidth(block1Class[i], cw );
        block1Class[i].style.float = "left";
        styleMargin(block1Class[i], "5px", "5px", "5px", "5px");
        stylePadding(block1Class[i], "5px", "5px", "5px", "5px");
        block1Class[i].style.float = "left";
    }
}
/*****************************************************************
 *************** #ar .container .block0 .block1 .img *************
 *****************************************************************/
var markerImgClass = arId.getElementsByClassName("marker-img");
ps = getComputedStyle( block1Class[0] );
pw = Number(ps.width.split("p")[0]);                // String --> remove "px" --> Number
ppr = Number(ps.paddingRight.split("p")[0]);
cmr = 5;
cw = (pw -2*cmr).toString() + "px";
for(var i=0; i<markerImgClass.length; i++){
    styleWidth( markerImgClass[i], cw);
    markerImgClass[i].style.height=cw;
    styleMargin(markerImgClass[i], "5px", "5px", "5px", "5px");
}
/****************************************************
 ****************** #ar .clear1.left ***************
 ***************************************************/
if( window.matchMedia("(max-width:450px)").matches ){
    //@media only screen and (max-width: 450px) {
    //    #ar .clear1.left
    //    {
    //        clear: left;
    //    }
    //}
    var clear1Class= arId.getElementsByClassName("clear1 left");
    clear1Class[clear1Class.length-1].style.clear = "left";
}
var endClass = arId.getElementsByClassName("end");
endClass[0].style.clear = "both";
//#ar .end
//{
//    clear: both;
//}
//
//@media only screen and (max-width: 450px) {
//    /* #ar .container .block0 .block1 */
//    #ar .block1
//    {
//        width: calc( 100% - 20px - 20px );
//    }
//    /* #ar .container .block0 .clear1.left */
//    #ar .clear1.left
//    {
//        clear: left;
//    }
//}
