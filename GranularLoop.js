import {Loop} from './Loop.js'

class GranularLoop extends Loop {
    constructor(config) {
        super(config.volumeBreakpoints)

        const player = new Tone.GrainPlayer(config.file).toDestination()
        player.grainSize = config.grainSize || 0.1
        player.loop = true

        this.player = player
        this.loop = player

        this.volumeBreakpoints = config.volumeBreakpoints
    }

    start() {
        if (this.loop.state === 'stopped') {
            this.loop.start()
        }
    }

    stop() {
        if (this.loop.state === 'started') {
            this.loop.stop()
        }
    }

    setVolume (volume) {
        this.player.volume.rampTo(volume, 0.1)
    }
}

export {GranularLoop}