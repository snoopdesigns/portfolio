window.onload = function() {
    onclickabout();
    setTimeout(function() {document.getElementById('about-block').style.transition = "All 1s ease";}, 2000);
    initLightbox();
}

var prevHeight = 0;

function check_scroll_action(div) {
    if(div.scrollTop > 300 && prevHeight <= 300) {
        var graph1Data = [
            {
                value: 90,
                color:"#666666"
            },
            {
                value : 10,
                color : "#000000"
            },
        ];

        var graph2Data = [
            {
                value: 50,
                color:"#666666"
            },
            {
                value : 50,
                color : "#000000"
            },
        ];

        var graph3Data = [
            {
                value: 70,
                color:"#666666"
            },
            {
                value : 30,
                color : "#000000"
            },
        ];

        var options = {
            segmentShowStroke : true,
            segmentStrokeColor : "#999999",
            segmentStrokeWidth : 2,
            percentageInnerCutout : 60,
            animation : true,
            animationSteps : 80,
            animationEasing : "easeOutQuart",
            animateRotate : true,
            animateScale : false,
            onAnimationComplete : null
        }

        document.getElementById('myChart1').style.width = "150px";
        document.getElementById('myChart1').style.height = "150px";

        document.getElementById('myChart2').style.width = "150px";
        document.getElementById('myChart2').style.height = "150px";

        document.getElementById('myChart3').style.width = "150px";
        document.getElementById('myChart3').style.height = "150px";

        var myDoughnutChart1 = new Chart(document.getElementById("myChart1").getContext("2d")).Doughnut(graph1Data,options);
        var myDoughnutChart2 = new Chart(document.getElementById("myChart2").getContext("2d")).Doughnut(graph2Data,options);
        var myDoughnutChart3 = new Chart(document.getElementById("myChart3").getContext("2d")).Doughnut(graph3Data,options);
    }

    if(div.scrollTop > 700 && prevHeight <= 700) {
        document.getElementById('first_img').style.opacity = "1.0";
        setTimeout(function() {document.getElementById('second_img').style.opacity = "1.0";}, 200);
        setTimeout(function() {document.getElementById('third_img').style.opacity = "1.0";}, 400);
    }

    if(div.scrollTop <200 && prevHeight >= 200) {
        document.getElementById('first_img').style.opacity = "0.0";
        document.getElementById('second_img').style.opacity = "0.0";
        document.getElementById('third_img').style.opacity = "0.0";
    }
    prevHeight = div.scrollTop;
}

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
        document.getElementById('about-block').style.overflow = "auto";
        document.getElementById('about-block').style.overflowY = "auto";
        document.getElementById('about-block').style.height = computeWindowHeight() + "px";
        setTimeout(function() {document.getElementById('about-block').style.opacity = "1";}, 100); }
    , 1000);
}

function computeWindowHeight() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return (y - 160);
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
        document.getElementById('example-block').style.overflow = "auto";
        document.getElementById('example-block').style.overflowY = "auto";
        document.getElementById('example-block').style.height = computeWindowHeight() + "px";
        setTimeout(function() {document.getElementById('example-block').style.opacity = "1";}, 100); }
    , 1000);
}

function change_preview_image(image, text, url) {
    document.getElementById('preview').style.background = "url(" + image + ")";
    //document.getElementById('preview').style.backgroundSize = "350px";
    document.getElementById('preview_text').innerHTML = "<a href='" + url + "' target='_blank'>" + text + "</a>";

}