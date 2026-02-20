input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 100) {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    basic.pause(100)
})
basic.showString("HOLA")
