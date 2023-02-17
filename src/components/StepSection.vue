<script>
export default {
  props: ["stepPhase"],
  data() {
    return {
      steps: [
        { stepNumber: 1, step: "YOUR INFO", stepActive: true },
        { stepNumber: 2, step: "SELECT PLAN", stepActive: false },
        { stepNumber: 3, step: "ADD-ONS", stepActive: false },
        { stepNumber: 4, step: "SUMMARY", stepActive: false },
      ],
      currentStep: Number(this.stepPhase),
    };
  },
  methods: {
    nextPhasePage(n) {
      this.$emit('changeNumber', 2)
      this.currentStep = n;
      console.log('HOLA DESDE STEP')
      
    },
  },
};
</script>
<template>
  <aside>
    <div v-for="(step, index) in steps" class="steps_container" :key="index">
      <span :class="step.stepNumber === stepPhase ? 'active' : ''">{{
        step.stepNumber
      }}</span>
      <div class="step_container">
        <span>STEP {{ step.stepNumber }}</span>
        <p>{{ step.step }}</p>
      </div>
    </div>
  </aside>
</template>
<style scoped>
aside {
  min-width: 260px;
  height: 100%;
  background-image: url(/bg-sidebar-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  padding: 28px;
  color: white;
}
.steps_container {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
}
.steps_container > span {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid white;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  place-content: center;
  margin-right: 6px;
}

.step_container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step_container span {
  font-weight: lighter;
  font-size: 12px;
  opacity: 0.5;
}
.step_container p {
  font-weight: bold;
  letter-spacing: 2px;
}
span.active {
  font-weight: 600;
  border: none;
  color: hsl(213, 96%, 18%);
  background-color: hsl(206, 94%, 87%);
}
@media (max-width:660px) {
  aside{
    width: 100%;
    max-height: 139px;
    display: flex;
    justify-content: center;
    background-image: url(/bg-sidebar-mobile.svg);
    gap: 18px;
    border-radius: 0;
  }
  .step_container{
    display: none;
  }
}
</style>
