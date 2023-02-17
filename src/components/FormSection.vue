<script>
import { store } from '../store';

import FirstPhase from './FirstPhase.vue';
import FourPhase from './FourPhase.vue';
import SecondPhase from './SecondPhase.vue';
import ThirdPhase from './ThirdPhase.vue';
import ThanksPhase from './ThanksPhase.vue'
export default {
  components: { FirstPhase, SecondPhase, ThirdPhase, FourPhase, ThanksPhase },
  computed: {
    changedValue() {
      return store.page
    },
    isDone(){
      return store.done
    }
  }
};
</script>
<template>
  <div class="formSection_container">
    
      <FirstPhase v-if="changedValue === 1"/>
      <SecondPhase v-if="changedValue === 2"/>
      <ThirdPhase v-if="changedValue === 3"/>
      <FourPhase v-if="changedValue === 4 && !isDone"/>
      <ThanksPhase v-if="isDone"/>
  </div>
</template>
<style scoped>
.formSection_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  color: hsl(213, 96%, 18%);
  position: relative;
}
@media (max-width: 660px) {
  .formSection_container{
    width: 100%;
    background-color: hsl(217, 100%, 97%);
  }
}
</style>
