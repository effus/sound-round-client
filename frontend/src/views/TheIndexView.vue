<template>
    <div>
        <h1>Index</h1>
        <button type="button" @click="onClickTest1">Oh! Sorry for distracting, I've just want 
            to ask you to press this big ugly button to check that server-to-server connection 
            is worked properly. Could you press?</button>
        <button v-if="isTest1Ok" type="button" @click="onClickTest2">Yes. So, there are another button. Lets check realtime connection.</button>
    </div>
    
</template>

<script>
//import axios from 'axios';

export default {
    data: () => {
        return {
            isTest1Ok: false
        }
    },
    methods: {
        onClickTest1() {
            console.log('pressing');
        },
        onClickTest2() {
            this.$router.push({name: 'About'});
        }
    }
}
</script>