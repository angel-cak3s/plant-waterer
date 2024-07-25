enum RadioMessage {
    message1 = 49434,
    manual_water = 45559,
    auto_water = 51825
}
radio.onReceivedMessage(RadioMessage.manual_water, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
})
radio.setGroup(99)
