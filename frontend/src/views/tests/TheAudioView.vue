<template>
    <div>
        <h1>Web AUDIO</h1>

        <ul>
            <li>Check web audio</li>
            <li><a href="javascript:" @click="onClickPlaySample">Play sample</a></li>
        </ul>

        <ul v-if="isConnected">
            <li>
                <div class="piano">
                    <div class="black">
                        <span></span>
                        <button type="button" @click="onClickNote('C#1')"></button>
                        <button type="button" @click="onClickNote('D#1')"></button>
                        <span></span>
                        <button type="button" @click="onClickNote('F#1')"></button>
                        <button type="button" @click="onClickNote('G#1')"></button>
                        <button type="button" @click="onClickNote('A#1')"></button>
                        <span></span>
                        <button type="button" @click="onClickNote('C#2')"></button>
                        <button type="button" @click="onClickNote('D#2')"></button>
                        <span></span>
                        <button type="button" @click="onClickNote('F#2')"></button>
                        <button type="button" @click="onClickNote('G#2')"></button>
                        <button type="button" @click="onClickNote('A#2')"></button>
                        <span></span>
                        <button type="button" @click="onClickNote('C#3')"></button>
                        <button type="button" @click="onClickNote('D#3')"></button>
                        <span></span>
                        <button type="button" @click="onClickNote('F#3')"></button>
                        <button type="button" @click="onClickNote('G#3')"></button>
                        <button type="button" @click="onClickNote('A#3')"></button>
                        <span></span>
                    </div>
                    <div class="white">
                        <button type="button" @click="onClickNote('C1')"></button>
                        <button type="button" @click="onClickNote('D1')"></button>
                        <button type="button" @click="onClickNote('E1')"></button>
                        <button type="button" @click="onClickNote('F1')"></button>
                        <button type="button" @click="onClickNote('G1')"></button>
                        <button type="button" @click="onClickNote('A1')"></button>
                        <button type="button" @click="onClickNote('B1')"></button>
                        <button type="button" @click="onClickNote('C2')"></button>
                        <button type="button" @click="onClickNote('D2')"></button>
                        <button type="button" @click="onClickNote('E2')"></button>
                        <button type="button" @click="onClickNote('F2')"></button>
                        <button type="button" @click="onClickNote('G2')"></button>
                        <button type="button" @click="onClickNote('A2')"></button>
                        <button type="button" @click="onClickNote('B2')"></button>
                        <button type="button" @click="onClickNote('C3')"></button>
                        <button type="button" @click="onClickNote('D3')"></button>
                        <button type="button" @click="onClickNote('E3')"></button>
                        <button type="button" @click="onClickNote('F3')"></button>
                        <button type="button" @click="onClickNote('G3')"></button>
                        <button type="button" @click="onClickNote('A3')"></button>
                        <button type="button" @click="onClickNote('B3')"></button>
                    </div>
                </div>
            </li>
            <li>
                <span v-for="item in notes" v-bind:key="item">{{item}} </span> 
            </li>
            <li>Open this page in second browser/device and you will hear notes that you playing (with some delay)</li>
        </ul>
    </div>
</template>

<script>
import * as Tone from 'tone';
import io from 'socket.io-client';
export default {
    data: () => {
        return {
            serviceUrl: process.env.VUE_APP_SOCKET_SERVER,
            socket: null,
            notes: [],
            isConnected: false
        }
    },
    mounted() {
        this.socket = io(this.serviceUrl, {
            reconnectionDelay: 1000,
            reconnection: true,
            reconnectionAttemps: 10,
            agent: false,
            upgrade: false,
            rejectUnauthorized: false
        });
        this.socket.on('connect', () => {
            this.isConnected = true;
        });
        this.socket.on('message', this.onReceiveAndPlay);
    },
    methods: {
        onClickPlaySample() {
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            synth.triggerAttackRelease("C4", "8n", now);
            synth.triggerAttackRelease("E4", "8n", now + 0.5);
            synth.triggerAttackRelease("G4", "8n", now + 1);
        },
        sendNote(note) {
            this.socket.emit('post-message', {
                note: note
            });
        },
        playNote(note) {
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            synth.triggerAttackRelease(note, "8n", now);
        },
        onClickNote(note) {
            this.playNote(note);
            this.notes.push(note);
            this.sendNote(note);
        },
        onReceiveAndPlay(payload) {
            console.log('onReceiveAndPlay', payload);
            this.notes.push(payload.note);
            this.playNote(payload.note);
        }
    }
}
</script>

<style lang="scss">
.piano {
    display: grid;
    width: 100%;
    height: 200px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    .black {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 15px repeat(30, 28px [col-start]);
        column-gap: 2px;
        grid-template-rows: 1fr;
        button {
            height: 100%;
            width: 100%;
            background-color: #000;
        }
    }
    .white {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(30, 30px [col-start]);
        grid-template-rows: 1fr;
        button {
            height: 100%;
            width: 100%;
            border: 1px solid grey;
        }
    }
}
</style>