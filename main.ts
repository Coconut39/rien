basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("Micro:bit")
            basic.pause(500)
            basic.showIcon(IconNames.StickFigure)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
