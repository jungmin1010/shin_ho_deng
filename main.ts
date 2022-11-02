input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
	
})
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (15 < smarthome.ReadLightIntensity(AnalogPin.P2)) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.showIcon(IconNames.Square)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showIcon(IconNames.No)
    }
})
