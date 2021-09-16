input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Rollerskate)
            basic.showIcon(IconNames.Duck)
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.pause(5000)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
