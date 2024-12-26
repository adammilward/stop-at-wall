let Sonar = 0
basic.forever(function () {
    Sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (Sonar > 2 && Sonar < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(500)
    } else {
        cuteBot.motors(30, 30)
    }
})
