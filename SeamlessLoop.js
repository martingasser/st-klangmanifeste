import {Loop} from './Loop.js'

class SeamlessLoop extends Loop {
    constructor(config) {
        super(config.volumeBreakpoints)
        this.file = config.file
        this.player = null
    }

    start() {
        if (! this.player) {

            const player = new Tone.Player().toDestination()
            player.fadeIn = 0.1
            player.fadeOut = 0.1
            player.loop = true
            player.autostart = false
            this.player = player
    
            this.player.load(this.file).then(() => {
                if (this.player) {
                    this.player.start()
                }
            })
        }
    }

    stop() {
        if (this.player) {
            if (this.player.state == 'started') {
                this.player.stop()
            }
            this.player.dispose()
            this.player = null
        }
    }

    setVolume (volume) {
        if (this.player) {
            this.player.volume.rampTo(volume, 0.1)
        }
    }
    
}

export {SeamlessLoop}