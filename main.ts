input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    power.fullPowerOn(FullPowerSource.A)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.play(music.stringPlayable("- - - - G F G A ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G F E D C D A C5 ", 140), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    power.lowPowerPause(3600000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    record.startRecording(record.BlockingState.Blocking)
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        # . . . #
        . # # # .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # # # # #
    . . . . .
    `)
