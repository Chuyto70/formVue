<script>
import FormSection from "./components/FormSection.vue";
import StepSection from "./components/StepSection.vue";
import { store } from "./store";

export default {
  components: {FormSection, StepSection},
  data() {
    return {
      store
  }
  }
}
</script>

<template>
  <main>
    <section class="main_container">
      <StepSection :step-phase="store.page" />
      <FormSection />
    </section>
  </main>
</template>

<style>
:root {
  --marin-blue: hsl(213, 96%, 18%);
  --purplish-blue: hsl(243, 100%, 62%);
  --pastel-blue: hsl(228, 100%, 84%);
  --light-blue: hsl(206, 94%, 87%);
  --strawberry-red: hsl(354, 84%, 57%);
  --Magnolia: hsl(217, 100%, 97%);
}
@font-face {
  font-family: Ubuntu;
  src: local(Ubuntu), url("/Ubuntu-Regular.ttf") format("TrueType");
  font-weight: normal;
}
*,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: Ubuntu;
}

main {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--Magnolia);
}
.main_container {
  display: flex;
  width: 800px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
}
@media (max-width:660px) {
  .main_container{
    padding: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    border-radius: 0;
  }
}
</style>
