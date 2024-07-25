enum RadioMessage {
    message1 = 49434,
    manual_water = 45559,
    auto_water = 51825,
    water_success = 40104
}
radio.onReceivedMessage(RadioMessage.manual_water, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(5000)
    radio.sendMessage(RadioMessage.water_success)
    basic.clearScreen()
    basic.showIcon(IconNames.Duck)
})
radio.setGroup(99)
basic.showIcon(IconNames.Duck)
