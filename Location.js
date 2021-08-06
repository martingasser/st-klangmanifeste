import {FMLoop} from './FMLoop.js'
import {GranularLoop} from './GranularLoop.js'
import {SampleLoop} from './SampleLoop.js'
import {SeamlessLoop} from './SeamlessLoop.js'

class Location {
    constructor (name, config) {
        this.name = name
        this.geo = config.geo

        this.loops = []

        for (let loopConfig of config.loops) {
            if (loopConfig.type === 'sample') {
                let loop = new SampleLoop({
                    files: loopConfig.files,
                    pauses: loopConfig.pauses || [],
                    volumeBreakpoints: loopConfig.volumeBreakpoints,
                    offset: loopConfig.offset || 0
                })
                this.loops.push(loop)
            } else if (loopConfig.type === 'seamless') {
                let loop = new SeamlessLoop({
                    file: loopConfig.file,
                    volumeBreakpoints: loopConfig.volumeBreakpoints
                })
                this.loops.push(loop)
            } else if (loopConfig.type === 'fm') {
                let loop = new FMLoop({
                    harm: loopConfig.harm || 4,
                    modIndex: loopConfig.modIndex || 20,
                    volume: loopConfig.volume || 1.0,
                    freq: loopConfig.freq || 300,
                    attacks: loopConfig.attacks || 1,
                    releases: loopConfig.releases || 1,
                    durations: loopConfig.durations || 0.5,
                    segmentLengths: loopConfig.segmentLengths || 4,
                    offset: loopConfig.offset || 0,
                    volumeBreakpoints: loopConfig.volumeBreakpoints
                })
                this.loops.push(loop)
            } else if (loopConfig.type === 'granular') {
                let loop = new GranularLoop({
                    file: loopConfig.file,
                    grainSize: loopConfig.grainSize,
                    volumeBreakpoints: loopConfig.volumeBreakpoints
                })
                this.loops.push(loop)
            }
        }
    }

    start () {
        for (let loop of this.loops) {
            loop.start()
        }
    }

    stop () {
        for (let loop of this.loops) {
            loop.stop()
        }
    }

    setVolume(volume) {
        for (let loop of this.loops) {
            loop.setVolume(volume)
        }
    }

    setDistance(distance) {
        for (let loop of this.loops) {
            loop.setDistance(distance)
        }
    }
}

export {Location}