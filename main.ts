let x_value = 0
let Y_VALUE = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    while (x_value <= 4) {
        led.toggle(x_value, 0)
        basic.pause(500)
        basic.clearScreen()
        x_value += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Y_VALUE = 0
    while (4 >= Y_VALUE) {
        led.toggle(0, Y_VALUE)
        basic.pause(500)
        basic.clearScreen()
        Y_VALUE += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.toggle(x_value, 0)
        basic.pause(500)
        x_value += 1
    }
    if (4 > Y_VALUE) {
        basic.clearScreen()
        x_value += 1
        led.toggle(x_value, 0)
    }
})
