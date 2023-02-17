<script>
import { store } from '../../store';



export default {
    data() {
        return {

        };
    },
    watch: {

    },
    methods: {
        goback() {
            store.page = store.page - 1
        }
    }
};
</script>
<template>
    <button @click="goback">Go Back</button>
</template>
<style scoped>
button {
    font-family: Ubuntu;
    font-weight: 600;
    position: absolute;
    left: 55px;
    bottom: 38px;
    padding: 12px 16px;
    color: grey;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms;
}

button:hover {
    color: hsl(213, 96%, 18%)
}
@media (max-width:660px) {
  button{
     left: 0;
     bottom: auto;
  }
}
</style>