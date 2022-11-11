input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine(convertToText(count))
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P6, 0)
    count = 0
})
let count = 0
OLED.init(128, 64)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    OLED.clear()
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        count += 5
    }
    if (count == 180) {
        count = 0
        pins.servoWritePin(AnalogPin.P6, 0)
    }
    pins.servoWritePin(AnalogPin.P6, count)
    basic.pause(100)
})
