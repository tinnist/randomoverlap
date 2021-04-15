namespace SpriteKind {
    export const hat = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
    hat3.setPosition(randint(15, 145), randint(15, 105))
    hat.setPosition(randint(15, 145), randint(15, 105))
    hat2.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hat, function (sprite, otherSprite) {
    mySprite.say("Excuse me!", 500)
    mySprite.setVelocity(randint(15, 145), randint(15, 145))
})
let hat3: Sprite = null
let hat2: Sprite = null
let mySprite: Sprite = null
let hat: Sprite = null
hat = sprites.create(img`
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
hat2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . . 2 . . . . . . 2 2 . 
    . . . . . . 2 2 2 . . . . . 2 . 
    . . . . . . . . 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hat)
hat3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . 4 . . 4 4 4 . . . . . 
    . . . . . 4 . . . . 4 . . . . . 
    . . . . . 4 . . . . 4 . . . . . 
    . . . . . 4 . . . . 4 . 4 . . . 
    . . 4 . . 4 . . . . 4 . 4 . . . 
    . . 4 4 . 4 . . . 4 4 . 4 . . . 
    . . . 4 . 4 . . . 4 . . 4 . . . 
    . . . 4 . 4 . . . 4 . 4 . . . . 
    . . . . 4 4 . . . 4 4 4 . . . . 
    . . . . 4 4 . . . 4 4 . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hat)
hat2.setPosition(randint(15, 145), randint(15, 105))
hat3.setPosition(randint(15, 145), randint(15, 105))
