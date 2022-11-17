var waitimg

var gameState="wait"




function preload(){
waitimg=loadImage("assets/SplashScreen.gif")
level1startimg=loadImage("/assets/buttons/level1start.jpg")
//poplevel1img=loadImage("assets/poplevel1.gif")
}


function setup(){
createCanvas(windowWidth,windowHeight)

// play=createImg(name of the image file)
play=createImg("assets/buttons/playwithtext.gif")
play.position(width/2-100,height-height/2.95)
play.size(310,310)


about=createImg("assets/buttons/aboutwithtext.gif")
about.position(width/6,height-height/3)
about.size(300,300)




sound=createImg("assets/buttons/soundwithtext.gif")
sound.position(width/2+width/4-100,height-height/3.15)
sound.size(290,290)

sound.hide()

poplevel1=createImg("assets/buttons/poplevel1.gif")
poplevel1.position(0,0)
poplevel1.size(width,height)
poplevel1.hide()

home=createImg("assets/buttons/homewithtext.gif")
home.position(width/2-150,height-height/3)
home.size(300,300)
home.hide()
// back=createButton("Back")
// back.position(width/2,height-height/5)
// back.hide()


}



function draw(){

    if(gameState=="wait"){
background(waitimg)
home.hide()
about.show()
play.show()
sound.show()
poplevel1.hide()

}

if (play.mousePressed(() => {
    gameState = "level1"

}))

if (home.mousePressed(() => {
    gameState = "wait"

}))


if (about.mousePressed(() => {
    gameState = "about"

}))


if(gameState==="about"){
    background("pink")
    play.hide()
    home.show()
    about.hide()
    sound.hide()
    poplevel1.hide()




}

if (gameState==="level1"){
    background(level1startimg)
    
    play.hide()
    home.show()
    about.hide()
    sound.hide()
    poplevel1.show()

}

}



