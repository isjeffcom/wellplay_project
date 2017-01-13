var slideIndex = 0;
var textIndex = 0;
var textH3Index = 0;
carousel();
bigText();
bigTextH3();
indicator();


/*function plusDivs(n) {
    carousel(slideIndex += n);
}*/

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; //disappear

    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block"; //display
    setTimeout(carousel, 10000); //10s
}

function indicator() {
    var j;
    var ind = document.getElementsByClassName("myInd");
    for (j = 0; j < ind.length; j++) {
      ind[j].className="fa fa-circle fa-1x fa-inverse myInd";
      ind[j].style.transform="scale(1.0)";
    }
    textIndex++;
    if (textIndex > ind.length) {textIndex = 1;}
    ind[slideIndex-1].className="fa fa-chevron-right fa-1x fa-inverse myInd";
    ind[slideIndex-1].style.transform="scale(1.5)";
    setTimeout(indicator, 10000); //10s
}

function bigText() {
    var a;
    var b = document.getElementsByClassName("myTexts");
    for (a = 0; a < b.length; a++) {
      b[a].style.display = "none"; //disappear

    }
    textIndex++;
    if (textIndex > b.length) {textIndex = 1}
    b[textIndex-1].style.display = "block"; //display
    setTimeout(bigText, 10000); //10s
}

function bigTextH3() {
    var c;
    var d = document.getElementsByClassName("myTextsH3");
    for (c = 0; c < d.length; c++) {
      d[c].style.display = "none"; //disappear

    }
    textH3Index++;
    if (textH3Index > d.length) {textH3Index = 1}
    d[textH3Index-1].style.display = "block"; //display
    setTimeout(bigTextH3, 10000); //10s
}
