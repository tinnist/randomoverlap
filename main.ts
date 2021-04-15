namespace SpriteKind {
    export const hat = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hat, function (sprite, otherSprite) {
    mySprite.say("Excuse me!", 500)
})
let mySprite: Sprite = null
let hat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hat)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 . . 5 5 . . . . . 
    . . . . . . 5 . . . 5 . . . . . 
    . . . . . . 5 . . . 5 . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 . . 5 . . 5 5 5 . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . . 5 . . . . 5 . . . . 
    . . . . . . 5 . . . 5 5 . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
hat.setPosition(35, 60)
