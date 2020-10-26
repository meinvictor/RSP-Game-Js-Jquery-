$(document).ready(function () {

    let clickSound = document.getElementById('s1');


    $('button').click(function () {
        clickSound.volume = 0.4;
        clickSound.play();

        $("#choose").hide();
    });


    var point = +localStorage.getItem('score');
    document.getElementById("point").innerHTML = point;


    $(".kam").click(function () {
        $(".player1").addClass("kamImg animate__animated animate__bounceIn");
        $(".player1").removeClass("nojImg papImg");


        let userValue = 1;
        let randomValue = Math.ceil(Math.random() * 3);
        // alert(`The programm number is ${randomValue}`);

        if (userValue === 1 && randomValue == 2) {
            $(".computer").addClass("nojImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("kamImgComp papImgComp");

            // win
            $("header h1.won").show();
            $("header h1.lost").hide();
            $("header h1.draw").hide();

            point = point + 1;
            localStorage.setItem('score', point);
            document.getElementById("point").innerHTML = point;
        
        } else if (randomValue == 3) {
            $(".computer").addClass("papImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("nojImgComp kamImgComp");

            // lost 
            $("header h1.lost").show();
            $("header h1.won").hide();
            $("header h1.draw").hide();

        } else {
            $(".computer").addClass("kamImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("nojImgComp papImgComp");

            // draw 
            $("header h1.draw").show();
            $("header h1.won").hide();
            $("header h1.lost").hide();
        }
    });

    $(".noj").click(function () {
        $(".player1").addClass("nojImg animate__animated animate__bounceIn");
        $(".player1").removeClass("kamImg papImg ");

        let userValue = 2;
        let randomValue = Math.ceil(Math.random() * 3);
        // alert(`The programm number is ${randomValue}`);

        if (userValue === 2 && randomValue == 3) {
            $(".computer").addClass("papImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("kamImgComp nojImgComp");

            // win
            $("header h1.won").show();
            $("header h1.lost").hide();
            $("header h1.draw").hide();

            point = point + 1;
            localStorage.setItem('score', point);
            document.getElementById("point").innerHTML = point;


        } else if (randomValue == 1) {
            $(".computer").addClass("kamImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("nojImgComp papImgComp");

            // lost 
            $("header h1.lost").show();
            $("header h1.won").hide();
            $("header h1.draw").hide();

        } else {
            $(".computer").addClass("nojImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("kamImgComp papImgComp");

            //draw 
            $("header h1.draw").show();
            $("header h1.won").hide();
            $("header h1.lost").hide();
        }
    });

    $(".pap").click(function () {
        $(".player1").addClass("papImg animate__animated animate__bounceIn");
        $(".player1").removeClass("kamImg nojImg");

        let userValue = 3;
        let randomValue = Math.ceil(Math.random() * 3);
        // alert(`The programm number is ${randomValue}`);

        if (userValue === 3 && randomValue == 1) {
            $(".computer").addClass("kamImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("papImgComp nojImgComp");

            // win
            $("header h1.won").show();
            $("header h1.lost").hide();
            $("header h1.draw").hide();

            point = point + 1;
            localStorage.setItem('score', point);
            document.getElementById("point").innerHTML = point;

        } else if (randomValue == 2) {
            $(".computer").addClass("nojImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("kamImgComp papImgComp");

            // lost 
            $("header h1.lost").show();
            $("header h1.won").hide();
            $("header h1.draw").hide();
        } else {
            $(".computer").addClass("papImgComp animate__animated animate__bounceIn");
            $(".computer").removeClass("kamImgComp nojImgComp");

            //draw 
            $("header h1.draw").show();
            $("header h1.won").hide();
            $("header h1.lost").hide();
        }
    });

    $('#back').click(function () {
        location.href = location.href;
        point = 0;
        localStorage.setItem('score', point);
    });
});