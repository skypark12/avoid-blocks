input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (sprite.isTouching(sprite2)) {
        sprite2.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite2: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 5)
sprite2 = game.createSprite(2, 0)
basic.forever(function () {
    if (sprite2.isDeleted()) {
        sprite2 = game.createSprite(2, 0)
    }
    sprite2.move(randint(1, 5))
    sprite2.turn(Direction.Right, 90)
    sprite2.move(1)
    basic.pause(1000)
    if (sprite.isTouching(sprite2)) {
        game.gameOver()
    }
})
