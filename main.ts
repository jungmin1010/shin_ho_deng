let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (50 > smarthome.ReadLightIntensity(AnalogPin.P2)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
