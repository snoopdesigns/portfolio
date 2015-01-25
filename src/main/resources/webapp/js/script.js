function onclickcontacts() {
    document.getElementById('about-block').style.opacity = "0";
    document.getElementById('about-block').style.overflow = "hidden";

    document.getElementById('example-block').style.opacity = "0";
    document.getElementById('example-block').style.overflow = "hidden";

    setTimeout(function() {
        document.getElementById('about-block').style.display = "none";
        document.getElementById('example-block').style.display = "none";
        document.getElementById('contact-block').style.display = "block";
        document.getElementById('contact-block').style.overflow = "visible";
        setTimeout(function() {document.getElementById('contact-block').style.opacity = "1";}, 100); }
    , 1000);
}

function onclickabout() {
    document.getElementById('contact-block').style.opacity = "0";
    document.getElementById('contact-block').style.overflow = "hidden";

    document.getElementById('example-block').style.opacity = "0";
    document.getElementById('example-block').style.overflow = "hidden";

    setTimeout(function() {
        document.getElementById('contact-block').style.display = "none";
        document.getElementById('example-block').style.display = "none";
        document.getElementById('about-block').style.display = "block";
        document.getElementById('about-block').style.overflow = "visible";
        setTimeout(function() {document.getElementById('about-block').style.opacity = "1";}, 100); }
    , 1000);
}

function onclickexample() {
    document.getElementById('contact-block').style.opacity = "0";
    document.getElementById('contact-block').style.overflow = "hidden";

    document.getElementById('about-block').style.opacity = "0";
    document.getElementById('about-block').style.overflow = "hidden";

    setTimeout(function() {
        document.getElementById('contact-block').style.display = "none";
        document.getElementById('about-block').style.display = "none";
        document.getElementById('example-block').style.display = "block";
        document.getElementById('example-block').style.overflow = "visible";
        setTimeout(function() {document.getElementById('example-block').style.opacity = "1";}, 100); }
    , 1000);
}