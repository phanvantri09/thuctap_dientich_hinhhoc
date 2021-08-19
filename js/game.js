var model1;
var model2;
var model3;
var dich;
var myScore;

function startGame() {
    // model1 = new component(30, 30, 'red', 10, 30);
    model2 = new component(30, 30, 'black', 10, 30);
    // model3 = new component(30, 30, 'blue', 10, 360);
    dich = new component(10, 100, 'yellow', 900, 0);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea1.start();
}
// khung nhìn chứa thành phần của game
var myGameArea1 = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 1000;
        this.canvas.height = 100;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.text_result = 0;
        this.speed = Math.floor(Math.random() * 10) + 1;
        this.interval = setInterval(updateGameArea, this.speed);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

var myGameArea2 = {
        canvas: document.createElement("canvas"),
        start: function() {
            this.canvas.width = 1000;
            this.canvas.height = 100;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.text_result = 0;
            this.speed = Math.floor(Math.random() * 10) + 1;
            this.interval = setInterval(updateGameArea, this.speed);
        },
        clear: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function() {
            clearInterval(this.interval);
        }
    }
    //tạo các thành phần cho 1 đối tượng
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea1.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (model2.crashWith(dich)) {
        myGameArea1.stop();
    } else {
        myGameArea1.clear();

        myGameArea1.text_result += 1;
        myScore.text = "Xe 1 speed = " + (myGameArea1.speed);
        myScore.update();

        model2.x += 1;
        model2.update();
        dich.update();
    }
}
// var car1, car2, car3, dich, myScore;

// function startGame() {
//     myScore = new component("30px", "Consolas", "black", 280, 40, "text");
//     car1 = new component(30, 30, "red", 10, 120, "text");
//     car2 = new component(30, 30, "red", 10, 120, "text");
//     car3 = new component(30, 30, "red", 10, 120, "text");
//     model1.start();
//     model2.start();
//     model3.start();
// }

// var model1 = {
//     canvas: document.getElementById("canvas1"),
//     start: function() {
//         this.canvas.width = 900;
//         this.canvas.height = 200;
//         this.context = this.canvas.getContext("2d");
//         this.text_result = 0;
//         this.speed = Math.floor(Math.random() * 10) + 1;
//         this.interval = setInterval(updateGameArea1, this.speed);
//     },
//     clear: function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop: function() {
//         clearInterval(this.interval);
//     }
// }
// var model2 = {
//     canvas: document.getElementById("canvas2"),
//     start: function() {
//         this.canvas.width = 900;
//         this.canvas.height = 200;
//         this.context = this.canvas.getContext("2d");
//     }
// }
// var model3 = {
//     canvas: document.getElementById("canvas3"),
//     start: function() {
//         this.canvas.width = 900;
//         this.canvas.height = 200;
//         this.context = this.canvas.getContext("2d");
//     }
// }

// function component(width, height, color, x, y, type) {
//     this.type = type;
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (this.type == "text") {
//             ctx.font = this.width + " " + this.height;
//             ctx.fillStyle = color;
//             ctx.fillText(this.text, this.x, this.y);
//         } else {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.crashWith = function(otherobj) {
//         var myleft = this.x;
//         var myright = this.x + (this.width);
//         var mytop = this.y;
//         var mybottom = this.y + (this.height);
//         var otherleft = otherobj.x;
//         var otherright = otherobj.x + (otherobj.width);
//         var othertop = otherobj.y;
//         var otherbottom = otherobj.y + (otherobj.height);
//         var crash = true;
//         if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
//             crash = false;
//         }
//         return crash;
//     }
// }

// function updateGameArea1() {
//     if (car1.crashWith(dich)) {
//         model1.stop();
//     } else {
//         model1.clear();

//         model1.text_result += 1;
//         myScore.text = "Xe 1 speed = " + (myGameArea.speed);
//         myScore.update();

//         car1.x += 1;
//         car1.update();
//         dich.update();
//     }
// }


// function car(width, height, color, x, y, type){
//         this.width = width;
//         this.height = height;
//         this.x = x;
//         this.y = y;

// }