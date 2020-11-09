<template>
    <div>
        <h1>SoundRound</h1>
        <p>
            I want to try connecting MIDI device to browser and play together with someone, using 
            <a href="https://socket.io/">Socket.io</a> and <a href="https://www.w3.org/TR/webaudio/">WebAudio API</a>.
        </p>
        <p>
            There are some <a href="/test">tests</a> to check how can we do it.
        </p>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    data: () => {
        return {
            isTest1Ok: false
        }
    },
    methods: {
        onClickTest1() {
            axios.get('/tests/1')
            .then((resp) => {
                this.isTest1Ok = resp.data.success;
            })
            .catch((err) => {
                console.error(err);
            });
        },
        onClickTest2() {
            this.$router.push({name: 'Test'});
        }
    }
}
</script>