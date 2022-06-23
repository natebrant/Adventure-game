var gamestate = 0;
var hp = 3;
$("#submit").click(function() {
            if (gamestate === 0) {
                if (document.getElementById("fix").innerHTML === "&lt;head&gt;&lt;title&gt;Launch Codes&lt;/title&gt;&lt;/head&gt;") {
                    console.log(document.getElementById("fix").innerHTML);
                    gamestate += 1;
                } else {
                    losthp();
                    console.log(hp);
                }
            }
            if (gamestate === 1) {
                document.getElementById("question").innerHTML = "Next they want you to fix posionion of the code with a new set of 39.9612 N, 82.9988 W ";
                document.getElementById("fix").innerHTML = "launch.pos(N=0 W=0)";
                gamestate += 1;
                hp += 1;
            }
            if (gamestate === 2) {
                if (document.getElementById("fix").innerHTML === "launch.pos(N=39.9612 W=82.9988)") {
                    console.log(document.getElementById("fix").innerHTML);
                } else {
                    losthp();
                    console.log(hp);
                }
            }


            });

        $("#test").click(function() {
            gamestate += 1;
            console.log(gamestate);
        });

            function losthp() {
                hp -= 1;
                if (hp === 2) {
                    document.getElementById("health").src = "https://i.ibb.co/3MJqXP2/My-project-5.png"
                    ;}
                    if (hp === 1) {
                        document.getElementById("health").src = "https://i.ibb.co/YD6g1mr/My-project-3.png";
                    }
                 if (hp === 0) {
                        $("#health").attr("src","https://i0.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1&w=640");
                    }
                }