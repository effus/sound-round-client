<template>
    <div>
        <h1>Index</h1>
        <button type="button" @click="onClickTest">Oh! Sorry for distracting, I've just want to ask you to press this small ugly button to check that server-to-server connection is worked properly. Could you press?</button>
    </div>
    
</template>

<script>
export default {
    methods: {
        onClickTest() {
            console.log('pressing');
        }
    }
}
</script>