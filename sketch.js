var waitimg

var gameState = "wait"




function preload() {
    waitimg = loadImage("assets/SplashScreen.gif")
    beginimg = loadImage("assets/splashbg.jpg")
    level1startimg = loadImage("assets/buttons/level1start.jpg")
    //poplevel1img=loadImage("assets/poplevel1.gif")
    maleplayerimg = loadImage("assets/buttons/male.png")
    femaleplayerimg = loadImage("assets/buttons/female.png")

    maleleftplayerimg = loadImage("assets/buttons/maleleft.png")
    femaleleftplayerimg = loadImage("assets/buttons/femaleleft.png")

    femalepopup = loadImage("assets/buttons/girlpopup.gif")
    malepopup = loadImage("assets/buttons/boypopup.gif")


    //Maze Images
    a1Img = loadImage("assets/maze/A1.png")
    b1Img = loadImage("assets/maze/B1.png")
    c1Img = loadImage("assets/maze/C1.png")
    d1Img = loadImage("assets/maze/D1.png")
    e1Img = loadImage("assets/maze/E1.png")
    f1Img = loadImage("assets/maze/F1.png")
    g1Img = loadImage("assets/maze/entrance.png")

    lifeBarImage = loadImage("assets/maze/lifeBar.png")

}


function setup() {
    createCanvas(windowWidth, windowHeight)

    // Maze Game
    a1sprite = createSprite(width / 2, height / 2)
    a1sprite.addImage(a1Img)
    a1sprite.scale = 1.43
    a1sprite.visible = false

    b1sprite = createSprite(width / 2 + 570, height / 2)
    b1sprite.addImage(b1Img)
    b1sprite.scale = 0.9
    b1sprite.visible = false

    c1sprite = createSprite(width / 2 + 570, height / 2)
    c1sprite.addImage(c1Img)
    c1sprite.scale = 0.9
    c1sprite.visible = false

    d1sprite = createSprite(width / 2 + 570, height / 2)
    d1sprite.addImage(d1Img)
    d1sprite.scale = 0.9
    d1sprite.visible = false

    e1sprite = createSprite(width / 2, height / 2)
    e1sprite.addImage(e1Img)
    e1sprite.scale = 1.43
    e1sprite.visible = false

    f1sprite = createSprite(width / 2, height / 2)
    f1sprite.addImage(f1Img)
    f1sprite.scale = 1.1
    f1sprite.visible = false

    g1sprite = createSprite(width / 2 + 570, height / 2)
    g1sprite.addImage(g1Img)
    g1sprite.scale = 0.9
    g1sprite.visible = false

    entrance = createImg("assets/maze/entrance.png")
    entrance.position(0, 0)
    entrance.size(windowWidth, windowHeight)
    entrance.hide()

    entrance2 = createImg("assets/maze/entrance2.png")
    entrance2.position(0, 0)
    entrance2.size(windowWidth, windowHeight)
    entrance2.hide()

    canvasSprite1 = createSprite(102 * 2, 102 * 2, 200 * 2, 200 * 2)
    canvasSprite1.shapeColor = "black"

    cardboard1 = createSprite(50, 30, 10, 60);
    cardboard1.shapeColor = "white";

    cardboard2 = createSprite(100, 100, 100, 10);
    cardboard2.shapeColor = "white";

    cardboard3 = createSprite(100, 65, 10, 50);
    cardboard3.shapeColor = "white";

    cardboard4 = createSprite(250, 100, 100, 10);
    cardboard4.shapeColor = "white";

    cardboard5 = createSprite(52, 150, 95, 10);
    cardboard5.shapeColor = "white";

    cardboard6 = createSprite(50, 250, 10, 100);
    cardboard6.shapeColor = "white";

    cardboard7 = createSprite(120, 200, 150, 10);
    cardboard7.shapeColor = "white";

    cardboard8 = createSprite(200, 150, 10, 100);
    cardboard8.shapeColor = "white";

    cardboard9 = createSprite(150, 125, 10, 152);
    cardboard9.shapeColor = "white";

    cardboard10 = createSprite(250, 50, 100, 10);
    cardboard10.shapeColor = "white";

    cardboard11 = createSprite(320, 150, 50, 10);
    cardboard11.shapeColor = "white";

    cardboard12 = createSprite(300, 100, 10, 100);
    cardboard12.shapeColor = "white";

    cardboard13 = createSprite(175, 250, 150, 10);
    cardboard13.shapeColor = "white";

    cardboard14 = createSprite(250, 200, 10, 100);
    cardboard14.shapeColor = "white";

    cardboard15 = createSprite(250, 380, 10, 50);
    cardboard15.shapeColor = "white";

    cardboard16 = createSprite(380, 250, 55, 10);
    cardboard16.shapeColor = "white";

    cardboard17 = createSprite(350, 175, 10, 250);
    cardboard17.shapeColor = "white";

    cardboard18 = createSprite(50, 350, 100, 10);
    cardboard18.shapeColor = "white";

    cardboard19 = createSprite(100, 350, 10, 100);
    cardboard19.shapeColor = "white";

    cardboard20 = createSprite(250, 350, 200, 10);
    cardboard20.shapeColor = "white";

    cardboard21 = createSprite(180, 300, 150, 10);
    cardboard21.shapeColor = "white";

    cardboard22 = createSprite(300, 270, 10, 150);
    cardboard22.shapeColor = "white";

    cardboard23 = createSprite(53 * 2, 112.5 * 2, 5 * 2, 20 * 2);
    cardboard23.shapeColor = "white";

    cardboardLeft = createSprite(5 * 2, 110 * 2, 5 * 2, 180 * 2)
    cardboardLeft.shapeColor = "white";
    cardboardRight = createSprite(200 * 2, 95 * 2, 5 * 2, 180 * 2)
    cardboardRight.shapeColor = "white";
    cardboardTop = createSprite(90 * 2, 200 * 2, 180 * 2, 5 * 2)
    cardboardTop.shapeColor = "white";
    cardboardBottom = createSprite(112 * 2, 4 * 2, 180 * 2, 5 * 2)
    cardboardBottom.shapeColor = "white";

    mazeEdge1 = createSprite(200 * 2, 100 * 2, 5 * 2, 200 * 2)
    mazeEdge1.visible = false
    mazeEdge2 = createSprite(2 * 2, 100 * 2, 5 * 2, 200 * 2)
    mazeEdge2.visible = false
    mazeEdge3 = createSprite(100 * 2, 2 * 2, 200 * 2, 5 * 2)
    mazeEdge3.visible = false
    mazeEdge4 = createSprite(100 * 2, 200 * 2, 200 * 2, 5 * 2)
    mazeEdge4.visible = false

    wall1 = createSprite(15 * 2, 25 * 2, 15 * 2, 16 * 2)
    wall2 = createSprite(15 * 2, 45 * 2, 15 * 2, 25 * 2)
    wall4 = createSprite(15 * 2, 65 * 2, 15 * 2, 16 * 2)
    wall5A = createSprite(24 * 2, 63 * 2, 5 * 2, 18 * 2)
    wall5 = createSprite(49 * 2, 63 * 2, 44 * 2, 18 * 2)
    wall17 = createSprite(15 * 2, 87 * 2, 17 * 2, 17 * 2)
    wall18 = createSprite(61 * 2, 85 * 2, 20 * 2, 26 * 2)
    wall19 = createSprite(38 * 2, 87 * 2, 26 * 2, 19 * 2)
    wall20 = createSprite(15 * 2, 116 * 2, 17 * 2, 40 * 2)
    wall20A = createSprite(15 * 2, 144 * 2, 17 * 2, 15 * 2)
    wall21 = createSprite(18 * 2, 161 * 2, 19 * 2, 17 * 2)
    wall22 = createSprite(37 * 2, 139 * 2, 17 * 2, 68 * 2)
    wall23 = createSprite(83 * 2, 137 * 2, 62 * 2, 17 * 2)
    wall24 = createSprite(85 * 2, 113 * 2, 55 * 2, 17 * 2)
    wall24A = createSprite(49 * 2, 137 * 2, 4 * 2, 20 * 2)
    wall28 = createSprite(136 * 2, 124 * 2, 19 * 2, 49 * 2)
    wall35 = createSprite(163 * 2, 125 * 2, 18 * 2, 53 * 2)
    wall36 = createSprite(160 * 2, 88 * 2, 26 * 2, 18 * 2)
    wall37 = createSprite(120 * 2, 138 * 2, 10 * 2, 15 * 2)
    wall38 = createSprite(175 * 2, 162 * 2, 40 * 2, 18 * 2)
    wall42 = createSprite(187 * 2, 175 * 2, 18 * 2, 6 * 2)
    wall43 = createSprite(137 * 2, 88 * 2, 18 * 2, 18 * 2)

    wall3 = createSprite(35 * 2, 40 * 2, 25 * 2, 15 * 2)
    wall6 = createSprite(37.5 * 2, 26 * 2, 16 * 2, 13 * 2)
    wall7 = createSprite(63 * 2, 34 * 2, 16 * 2, 23 * 2)
    wall8 = createSprite(55 * 2, 14 * 2, 50 * 2, 13 * 2)
    wall9 = createSprite(87.5 * 2, 15.5 * 2, 15 * 2, 15 * 2)
    wall9A = createSprite(87.5 * 2, 26 * 2, 18 * 2, 5 * 2)
    wall10 = createSprite(87.5 * 2, 38 * 2, 18 * 2, 18 * 2)
    wall11 = createSprite(87.5 * 2, 72.5 * 2, 18 * 2, 50 * 2)
    wall12 = createSprite(122 * 2, 37.5 * 2, 50 * 2, 18 * 2)
    wall13 = createSprite(122 * 2, 15.5 * 2, 50 * 2, 16 * 2)
    wall14 = createSprite(172 * 2, 15.5 * 2, 48 * 2, 16 * 2)
    wall15 = createSprite(162 * 2, 48 * 2, 16 * 2, 48 * 2)
    wall16 = createSprite(188 * 2, 74 * 2, 16 * 2, 100 * 2)
    wall25 = createSprite(112 * 2, 112 * 2, 19 * 2, 19 * 2)
    wall26 = createSprite(87 * 2, 187 * 2, 69 * 2, 19 * 2)
    wall27 = createSprite(112 * 2, 87 * 2, 19 * 2, 29 * 2)
    wall29 = createSprite(113 * 2, 63 * 2, 17 * 2, 20 * 2)
    wall30 = createSprite(135 * 2, 63 * 2, 25 * 2, 20 * 2)
    wall31 = createSprite(137 * 2, 78 * 2, 18 * 2, 10 * 2)
    wall32 = createSprite(136 * 2, 162 * 2, 18 * 2, 18 * 2)
    wall33 = createSprite(100 * 2, 162 * 2, 52 * 2, 18 * 2)
    wall34 = createSprite(63.5 * 2, 165 * 2, 20 * 2, 23 * 2)
    wall39 = createSprite(188 * 2, 140 * 2, 18 * 2, 23 * 2)
    wall40 = createSprite(150 * 2, 187 * 2, 45 * 2, 18 * 2)
    wall41 = createSprite(176 * 2, 187 * 2, 6 * 2, 18 * 2)


    //   make walls invisible

    cardboard1.visible = false

    cardboard2.visible = false

    cardboard3.visible = false

    cardboard4.visible = false

    cardboard5.visible = false

    cardboard6.visible = false

    cardboard7.visible = false

    cardboard8.visible = false

    cardboard9.visible = false

    cardboard10.visible = false

    cardboard11.visible = false

    cardboard12.visible = false

    cardboard13.visible = false

    cardboard14.visible = false;

    cardboard15.visible = false

    cardboard16.visible = false

    cardboard17.visible = false

    cardboard18.visible = false

    cardboard19.visible = false

    cardboard20.visible = false

    cardboard21.visible = false

    cardboard22.visible = false

    cardboard23.visible = false

    cardboardLeft.visible = false
    cardboardRight.visible = false
    cardboardTop.visible = false
    cardboardBottom.visible = false
    canvasSprite1.visible = false



    wall20A.visible = false
    wall24A.visible = false
    wall5A.visible = false
    wall9A.visible = false

    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    wall24.visible = false
    wall25.visible = false
    wall26.visible = false
    wall27.visible = false
    wall28.visible = false
    wall29.visible = false
    wall30.visible = false
    wall31.visible = false
    wall32.visible = false
    wall33.visible = false
    wall34.visible = false
    wall35.visible = false
    wall36.visible = false
    wall37.visible = false
    wall38.visible = false
    wall39.visible = false
    wall40.visible = false
    wall41.visible = false
    wall42.visible = false
    wall43.visible = false


    player1 = createSprite(15 * 2, 20, 15, 15)
    player1.shapeColor = "red"
    player1.visible = false

    lifeBarA = createSprite(windowWidth - 150, 50, 150, 40)
    lifeBarA.shapeColor = "white"
    lifeBarB = createSprite(windowWidth - 150, 50, 150, 40)
    lifeBarB.shapeColor = "#E0115F"
    lifeBarA.visible = false
    lifeBarB.visible = false


    lifeBar = createSprite(windowWidth - 280, 50)
    lifeBar.addImage(lifeBarImage)
    lifeBar.scale = 0.1
    lifeBar.visible = false

    // play=createImg(name of the image file)
    play = createImg("assets/buttons/begin.gif")
    play.position(width / 2 - 150, height - height / 2.75)
    play.size(310, 310)


    sound = createImg("assets/buttons/soundwithtext.gif")
    sound.position(width / 2 + width / 4 - 100, height - height / 3.15)
    sound.size(290, 290)

    sound.hide()


    home = createImg("assets/buttons/homewithtext.gif")
    home.position(width / 2 - 150, height - height / 3)
    home.size(300, 300)
    home.hide()


    selectplayer = createImg("assets/buttons/selectplayer.gif")
    selectplayer.position(width / 2 - 250, height / 4)
    selectplayer.size(500, 500)
    selectplayer.style('z-index', 10)
    selectplayer.hide()
    // selectplayer.style("background-color","cyan")

    selectplayerboy = createImg("assets/buttons/male.png")
    selectplayerboy.position(width / 10, height / 3.5)
    selectplayerboy.hide()

    selectplayergirl = createImg("assets/buttons/femaleleft.png")
    selectplayergirl.position(width / 2 + width / 4, height / 3.5)
    // selectplayergirl.style("background-color","cyan")
    selectplayergirl.hide()

    popgirl = createSprite(width / 2, height / 2)
    popgirl.addImage(femalepopup)
    popgirl.scale = 3
    popgirl.visible = false

    popboy = createSprite(width / 2, height / 2)
    popboy.addImage(malepopup)
    popboy.scale = 3
    popboy.visible = false

    ticketbutton = createImg("assets/buttons/ticketbutton.png")
    ticketbutton.position(50, 50)
    ticketbutton.hide()

    player = createSprite(width / 6, height / 2)
    player.visible = false


    startgamebutton = createImg("assets/buttons/startgame.gif")
    startgamebutton.position(50, 0)
    // startgamebutton.style("translate","0,0")

    // startgamebutton.style("transform","-50%,50%")
    startgamebutton.size(width / 1.05, height)
    startgamebutton.hide()

}



function draw() {

    if (gameState == "wait") {
        background(waitimg)
        home.hide()
        // about.show()
        play.show()
        // sound.show()
        // poplevel1.hide()
        selectplayer.hide()
        selectplayergirl.hide()
        popgirl.visible = false
        ticketbutton.hide()
        popboy.visible = false
        startgamebutton.hide()



    }

    if (selectplayerboy.mousePressed(() => {
        selectplayergirl.remove()
        popboy.visible = true
        popgirl.visible = false
        selectplayer.hide()
        ticketbutton.show()
        startgamebutton.hide()


    }))

        if (selectplayergirl.mousePressed(() => {
            popgirl.visible = true
            selectplayer.hide()
            popboy.visible = false
            selectplayerboy.remove()
            ticketbutton.show()
            startgamebutton.hide()

        }))

            // selectplayerboy

            if (play.mousePressed(() => {
                gameState = "begin"

            }))

                if (ticketbutton.mousePressed(() => {
                    gameState = "level1"

                }))

                    if (startgamebutton.mousePressed(() => {
                        gameState = "mazegame"

                    }))

                        if (selectplayer.mousePressed(() => {
                            gameState = "playerselect"

                        }))

                            if (home.mousePressed(() => {
                                gameState = "wait"

                            }))



                                if (gameState === "begin") {
                                    background(beginimg)

                                    play.hide()
                                    // home.show()
                                    // about.hide()
                                    sound.hide()
                                    // poplevel1.show()
                                    selectplayer.show()


                                }


    if (gameState === "level1") {
        background(a1Img)

        play.hide()

        sound.hide()
        selectplayer.hide()
        popgirl.visible = false
        selectplayer.hide()
        popboy.visible = false
        selectplayerboy.remove()
        selectplayergirl.remove()
        ticketbutton.hide()
        startgamebutton.show()


    }

    if (gameState === "playerselect") {
        selectplayergirl.show()
        selectplayerboy.show()
        startgamebutton.hide()


    }

    // MAZE GAME STARTS HERE

    if (gameState === "mazegame") {
        mazeGameCode()
        // background("yellow")
        play.hide()
        sound.hide()
        selectplayer.hide()
        popgirl.visible = false
        selectplayer.hide()
        popboy.visible = false
        selectplayerboy.remove()
        selectplayergirl.remove()
        ticketbutton.hide()
        startgamebutton.hide()


    }



    drawSprites()

}



function mazeGameCode() {


    // make sprites visible

    player1.visible = true
    lifeBarA.visible = true
    lifeBarB.visible = true
    lifeBar.visible = true

    cardboard1.visible = true

    cardboard2.visible = true

    cardboard3.visible = true

    cardboard4.visible = true

    cardboard5.visible = true

    cardboard6.visible = true

    cardboard7.visible = true

    cardboard8.visible = true

    cardboard9.visible = true

    cardboard10.visible = true

    cardboard11.visible = true

    cardboard12.visible = true

    cardboard13.visible = true

    cardboard14.visible = true;

    cardboard15.visible = true

    cardboard16.visible = true

    cardboard17.visible = true

    cardboard18.visible = true

    cardboard19.visible = true

    cardboard20.visible = true

    cardboard21.visible = true

    cardboard22.visible = true

    cardboard23.visible = true

    cardboardLeft.visible = true
    cardboardRight.visible = true
    cardboardTop.visible = true
    cardboardBottom.visible = true
    canvasSprite1.visible = true



    wall20A.visible = false
    wall24A.visible = false
    wall5A.visible = false
    wall9A.visible = false

    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    wall24.visible = false
    wall25.visible = false
    wall26.visible = false
    wall27.visible = false
    wall28.visible = false
    wall29.visible = false
    wall30.visible = false
    wall31.visible = false
    wall32.visible = false
    wall33.visible = false
    wall34.visible = false
    wall35.visible = false
    wall36.visible = false
    wall37.visible = false
    wall38.visible = false
    wall39.visible = false
    wall40.visible = false
    wall41.visible = false
    wall42.visible = false
    wall43.visible = false


    // making sprites visible ends here

    if (wall1.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall2.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall4.isTouching(player1) || (wall5).isTouching(player1) || (wall5A).isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall18.isTouching(player1) || wall19.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall17.isTouching(player1) || wall20.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall20A.isTouching(player1) || wall21.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall22.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall24A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall24.isTouching(player1) || wall23.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall24A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall37.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall28.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall43.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall36.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall35.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall38.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }



    if (wall42.isTouching(player1)) {

    }


    if (wall3.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall6.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall7.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall8.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall9.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall9A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall10.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall11.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall12.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall13.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall14.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall15.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall16.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall25.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall26.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall27.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall29.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall30.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall31.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall32.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall33.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall34.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall39.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall40.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall41.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }

    if (player1.isTouching(mazeEdge1)) {
        player1.bounceOff(mazeEdge1)
    } if (player1.isTouching(mazeEdge2)) {
        player1.bounceOff(mazeEdge2)
    } if (player1.isTouching(mazeEdge3)) {
        player1.bounceOff(mazeEdge3)
    } if (player1.isTouching(mazeEdge4)) {
        player1.bounceOff(mazeEdge4)
    }
    if (player1.isTouching(cardboard1) || player1.isTouching(cardboard2) || player1.isTouching(cardboard3) || player1.isTouching(cardboard4) || player1.isTouching(cardboard5) || player1.isTouching(cardboard6) || player1.isTouching(cardboard7) || player1.isTouching(cardboard8) || player1.isTouching(cardboard9) || player1.isTouching(cardboard10) ||
        player1.isTouching(cardboard11) || player1.isTouching(cardboard12) || player1.isTouching(cardboard13) || player1.isTouching(cardboard14) || player1.isTouching(cardboard15) || player1.isTouching(cardboard16) || player1.isTouching(cardboard17) || player1.isTouching(cardboard18) || player1.isTouching(cardboard19) || player1.isTouching(cardboard20) ||
        player1.isTouching(cardboard21) || player1.isTouching(cardboard22) || player1.isTouching(cardboardRight) || player1.isTouching(cardboardLeft) || player1.isTouching(cardboardBottom) || player1.isTouching(cardboardTop)) {
        lifeBarB.width = lifeBarB.width - 30
        lifeBarB.x = lifeBarB.x + 15
        player1.velocityX = 0
        player1.velocityY = 0
        player1.x = 15
        player1.y = 10

        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
        a1sprite.visible = false
        b1sprite.visible = false
        c1sprite.visible = false
        d1sprite.visible = false
        e1sprite.visible = false
        f1sprite.visible = false
    }
}

function a1Execpt() {
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    a1sprite.visible = true
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
}
function b1Execpt() {
    a1sprite.scale = 1.43
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = true
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
}
function c1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = true
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    d1sprite.x = width / 2 + 570
}
function d1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = true
    e1sprite.visible = false
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    c1sprite.x = width / 2 + 570
}
function e1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = true
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    d1sprite.x = width / 2 + 570
}
function f1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    g1sprite.scale = 0.9
    e1sprite.scale = 1.43
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = true
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
}
function g1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    g1sprite.visible = true
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0.5
    }
    if (keyCode === UP_ARROW) {
        player1.velocityX = 0
        player1.velocityY = -0.5
    }
    if (keyCode === RIGHT_ARROW) {
        player1.velocityX = 0.5
        player1.velocityY = 0
    }
    if (keyCode === LEFT_ARROW) {
        player1.velocityX = -0.5
        player1.velocityY = 0
    }

}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
    }

    if (keyCode === LEFT_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
    }
    if (keyCode === RIGHT_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
    }

    if (keyCode === UP_ARROW) {
        player1.velocityX = 0
        player1.velocityY = -0
    }
}



