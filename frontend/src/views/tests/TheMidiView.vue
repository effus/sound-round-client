<template>
    <div>
        <h1>MIDI</h1>

        <ul>
            <li>MIDI enable: {{isMidiEnabled}}</li>
            <li><a href="javascript:" @click="onClickRequestMidiSupport">Request MIDI support</a></li>
        </ul>

        <a href="/test/audio">Web Audio</a>
    </div>
</template>

<script>

import WebMidi from 'webmidi';

export default {
    data: () => {
        return {
            isMidiEnabled: false,
            inputs: null,
            outputs: null
        }
    },
    methods: {
        onClickRequestMidiSupport() {
            WebMidi.enable((err) => {
                if (err) {
                    console.log("WebMidi could not be enabled.", err);
                } else {
                    console.log(WebMidi.inputs);
                    console.log(WebMidi.outputs);
                }
                this.isMidiEnabled = true;
            });
        }
    }
}
</script>