<template>
    <div>
        <h1>Web AUDIO</h1>

        <ul>
            <li>Check web audio</li>
            <li><a href="javascript:" @click="onClickPlaySample">Play sample</a></li>
        </ul>
    </div>
</template>

<script>
import * as Tone from 'tone';
export default {
    methods: {
        onClickPlaySample() {
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now()
            synth.triggerAttackRelease("C4", "8n", now)
            synth.triggerAttackRelease("E4", "8n", now + 0.5)
            synth.triggerAttackRelease("G4", "8n", now + 1)
        }
    }
}
</script>