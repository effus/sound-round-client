<template>
    <div>
        <h1>Realtime connection</h1>

        <ul>
            <li>You need 2 device/browsers/tabs</li>
            <li>Open this page on both</li>
            <li>Click <a href="/test/user/1">here</a> a first one, and <a href="/test/user/2">here</a> a second</li>
            <li>Check realtime events!</li>
        </ul>

        <div v-if="this.$route.params.user">
            <h2>Flags</h2>
            <div>User: {{$route.params.user}}</div>
            <div>isConnected: {{isConnected}}</div>
            <div>
                Messages: {{messages.length}}
            </div>
            <ul>
                <li v-for="item in messages" v-bind:key="item">
                    [ {{item.user}} ]: {{item.text}}
                </li>
            </ul>
            <div>
                <input type="text" v-model="textToSend">
                <button type="button" @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    data: () => {
        return {
            socket: null,
            isConnected: false,
            messages: [],
            textToSend: ''
        }
    },
    mounted() {
        if (!this.$route.params.user) {
            return;
        }
        this.socket = io('http://localhost:3000', {
            reconnectionDelay: 1000,
            reconnection: true,
            reconnectionAttemps: 10,
            //transports: ['websocket'],
            agent: false,
            upgrade: false,
            rejectUnauthorized: false
        });
        this.socket.on('connect', () => {
            this.isConnected = true;
        });
        this.socket.on('message', this.onReceiveMessage);
    },
    methods: {
        sendMessage() {
            this.socket.emit('post-message', {
                from: this.$route.params.user,
                text: this.textToSend
            });
            this.messages.push({
                user: this.$route.params.user,
                text: this.textToSend
            });
            this.textToSend = '';
        },
        onReceiveMessage(payload) {
            console.log('onReceiveMessage', payload);
            this.messages.push(payload);
        }
    }
}
</script>