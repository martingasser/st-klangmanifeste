import {weightedChoice} from './weightedChoice.js'
import {Loop} from './Loop.js'

class SampleLoop extends Loop {
    constructor(config) {
        super(config.volumeBreakpoints)

        if (config.offset) {
            this.offset = config.offset
        } else {
            this.offset = 0
        }

        this.bufferIndices = []
        this.bufferUrls = []

        for (let i = 0; i < config.files.length; i++) {
            const file = config.files[i]
            if (file[0] && file[1]) {
                this.bufferIndices.push([i, file[1]])
                this.bufferUrls.push(file[0])
            } else {
                console.log('error')
            }
        }

        const player = new Tone.Player().toDestination()
        player.fadeIn = 0.1
        player.fadeOut = 0.1
        player.loop = false
        this.player = player

        this.pauses = config.pauses

        this.buffers = null
    }

    pickRandomParams() {
        return {
            bufferIndex: weightedChoice(this.bufferIndices),
            pause: weightedChoice(this.pauses)
        }
    }

    start() {
        if (this.buffers == null) {
            this.buffers = new Tone.ToneAudioBuffers(
                this.bufferUrls,
                () => {
                    let params = this.pickRandomParams()
                    let buffer = this.buffers.get(params.bufferIndex)
    
                    const play = () => {
                        this.player.buffer = buffer
                        this.player.start()
                    }

                    const loop = () => {
                        play()
                        this.timeout = setTimeout(() => {
                            this.player.stop()
                            play()
                            params = this.pickRandomParams()
                            buffer = this.buffers.get(params.bufferIndex)
                            this.timeout = setTimeout(loop, (buffer.duration + params.pause)*1000)
                        }, 1000*(buffer.duration + params.pause))
                    }
                    
                    loop()
                }
            )
        }
    }

    stop() {
        if (this.buffers != null) {
            if (this.timeout) {
                clearTimeout(this.timeout)
            }

            this.player.stop()
            this.buffers.dispose()
            this.buffers = null
        }
    }

    setVolume (volume) {
        if (this.player) {
            this.player.volume.rampTo(volume, 0.1)
        }
    }    
}

export {SampleLoop}