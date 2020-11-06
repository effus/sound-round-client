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