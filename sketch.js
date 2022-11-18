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

}


function setup() {
    createCanvas(windowWidth, windowHeight)

    // play=createImg(name of the image file)
    play = createImg("assets/buttons/begin.gif")
    play.position(width / 2 - 150, height - height / 2.75)
    play.size(310, 310)


    // about=createImg("assets/buttons/aboutwithtext.gif")
    // about.position(width/6,height-height/3)
    // about.size(300,300)



    sound = createImg("assets/buttons/soundwithtext.gif")
    sound.position(width / 2 + width / 4 - 100, height - height / 3.15)
    sound.size(290, 290)

    sound.hide()

    // poplevel1=createImg("assets/buttons/poplevel1.gif")
    // poplevel1.position(0,0)
    // poplevel1.size(width,height)
    // poplevel1.hide()

    home = createImg("assets/buttons/homewithtext.gif")
    home.position(width / 2 - 150, height - height / 3)
    home.size(300, 300)
    home.hide()
    // back=createButton("Back")
    // back.position(width/2,height-height/5)
    // back.hide()


    selectplayer = createImg("assets/buttons/selectplayer.gif")
    selectplayer.position(width / 2 - 250, height / 4)
    selectplayer.size(500, 500)
    selectplayer.style('z-index', 10)
    selectplayer.hide()
    // selectplayer.style("background-color","cyan")

    selectplayerboy = createImg("assets/buttons/male.png")
    selectplayerboy.position(width / 10, height / 3.5)
    // selectplayerboy.style("background-color","cyan")
    // selectplayerboy.style("padding","100")
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

    // male.addImage(maleplayerimg)
    // male.addImage(maleleftplayerimg)


    // female=createSprite(width/2+width/4,height/2)
    // female.addImage(femaleplayerimg)
    // female.addImage(femaleleftplayerimg)


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
        background("red")

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
        background("yellow")
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



