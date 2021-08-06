import {weightedChoice} from './weightedChoice.js'
import {Loop} from './Loop.js'

class FMLoop extends Loop {
    constructor(config) {
        super(config.volumeBreakpoints)

        this.attacks = config.attacks
        this.releases = config.releases
        this.durations = config.durations
        this.segmentLengths = config.segmentLengths
        this.offset = config.offset

        let params = this.pickRandomParams()

        const fmOsc = new Tone.FMOscillator({
            frequency: config.freq,
            harmonicity: config.harm,
            modulationIndex: config.modIndex,
            volume: config.volume,
        });
        this.osc = fmOsc

        const envelope = new Tone.AmplitudeEnvelope({
            attack: params.attack,
            decay: 0,
            sustain: 1.0,
            release: params.release,
            releaseCurve: 'linear'
        }).toDestination()

        const fmPan = new Tone.Panner(config.pan)
        
        this.osc.connect(fmPan).connect(envelope).start()
        
        this.loop = new Tone.Loop(time => {
            time = time.config
            envelope.attack = params.attack
            envelope.release = params.release        
            envelope.triggerAttackRelease(params.duration)
            params = this.pickRandomParams()
            this.loop.interval = params.segmentLength

        }, params.segmentLength)
    }

    pickRandomParams() {
        return {
            attack: weightedChoice(this.attacks),
            release: weightedChoice(this.releases),
            duration: weightedChoice(this.durations),
            segmentLength: weightedChoice(this.segmentLengths)
        }
    }

    start () {
        if (this.loop.state === 'stopped') {
            this.loop.start(this.offset)
        }
    }

    stop () {
        if (this.loop.state === 'started') {
            this.loop.stop()
        }
    }

    setVolume(volume) {
        this.osc.volume.rampTo(volume, 0.1)
    }
}

export {FMLoop}