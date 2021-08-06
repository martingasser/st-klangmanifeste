class Loop {
    constructor(volumeBreakpoints) {
        this.volumeBreakpoints = volumeBreakpoints
    }

    setDistance(distance) {
        if (distance <= this.volumeBreakpoints.outer && distance >= this.volumeBreakpoints.inner) {
            this.start()
            const alpha = (distance - this.volumeBreakpoints.inner) / (this.volumeBreakpoints.outer - this.volumeBreakpoints.inner)
            const volume = -96.0*alpha + this.volumeBreakpoints.maxVolume*(1.0-alpha)
            this.setVolume(volume)
        } else if (distance <= this.volumeBreakpoints.inner) {
            this.start()
            this.setVolume(this.volumeBreakpoints.maxVolume)
        } else {
            this.stop()
            this.setVolume(-96.0)
        }
    }

}


export {Loop}