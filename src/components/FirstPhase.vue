<script>
import { store } from '../store';
import NextButton from './buttons/NextButton.vue';


export default {
    data() {
        return {
            formValue: {
                name: store.name,
                email: store.email,
                phone: store.phone,
            },
            nextPhase: false,
            isInputEmpty: {},
        };
    },
    methods: {
        setFormData(event) {
            const data2 = Object.fromEntries(new FormData(event.target));
            for (const input in data2) {
                if (data2[input].length === 0) {
                    this.isInputEmpty[input] = true;
                }
                else {
                    this.isInputEmpty[input] = false;
                    this.formValue[input] = data2[input];
                    store[input] = data2[input]
                }
            }
            if (this.formValue.email.length !== 0 &&
                this.formValue.name.length !== 0 &&
                this.formValue.phone.length !== 0) {
                this.nextPhase = true;
                store.page = 2;
            }
        }
    },
    watch: {
        "formValue.name"() {
            if (this.formValue.name.length !== 0) {
                this.isInputEmpty.name = false;
            }
            else {
                this.isInputEmpty.name = true;
            }
        },
        "formValue.email"() {
            if (this.formValue.email.length !== 0) {
                this.isInputEmpty.email = false;
            }
            else {
                this.isInputEmpty.email = true;
            }
        },
        // eslint-disable-next-line space-before-blocks
        "formValue.phone"() {
            if (this.formValue.phone.length !== 0) {
                this.isInputEmpty.phone = false;
            }
            else {
                this.isInputEmpty.phone = true;
            }
        },
    },
    components: { NextButton }
};
</script>
<template>
<div class="form_section animate__animated animate__fadeIn">
  <h1>Personal info</h1>
  <span>Please, provide your name, email address and phone number.</span>

  <form class="form" @submit.prevent="setFormData">
    <div class="label_container">
      <label for="name">Name</label
      ><span
        class="fieldRequired"
        :class="isInputEmpty.name ? 'showFiledRequired' : ''"
      >
        This file is required</span
      >
    </div>
    <input
      :class="isInputEmpty.name ? 'showFiledRequired' : ''"
      v-model="formValue.name"
      type="text"
      name="name"
      placeholder="e.g. Stephen King"
    />

<div class="label_container">
      <label for="email">Email Address</label
      ><span
        class="fieldRequired"
        :class="isInputEmpty.email ? 'showFiledRequired' : ''"
      >
        This file is required</span
      >
</div>
    <input
      :class="isInputEmpty.email ? 'showFiledRequired' : ''"
      v-model="formValue.email"
      type="text"
      name="email"
      placeholder="e.g. stephenking@lorem.com"
    />

<div class="label_container">
      <label for="phone">Phone Number</label
      ><span
        class="fieldRequired"
        :class="isInputEmpty.phone ? 'showFiledRequired' : ''"
      >
        This file is required</span
      >
</div>
    <input
      :class="isInputEmpty.phone ? 'showFiledRequired' : ''"
      v-model="formValue.phone"
      type="text"
      name="phone"
      placeholder="e.g. +1 234 567 890"
    />
    <div class="buttons_container">
        <NextButton :valid-form="nextPhase" />
    </div>
  </form>
</div>
</template>
<style scoped>
.form_section {
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: 70%;
    width: 70%;
}

.form_section>span {
    font-weight: 600;
    opacity: 0.5;
    margin-bottom: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.label_container {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
}

.label_container>span {
    color: red;
    transition: all 200ms;
}

.fieldRequired {
    display: none;
    width: -webkit-fill-available;  
}

.showFiledRequired {
    display: inline;
    border-color: red;
    transition: all 900ms;
}

input {
    padding: 12px;
    border-radius: 8px;
    outline: none;
    border: 1px solid hsl(213, 96%, 18%, 0.2);
    color: hsl(213, 96%, 18%);
    font-weight: 600;
    transition: all 200ms;
}

input:focus {
    border-color: hsl(213, 96%, 18%);
}

::placeholder {
    color: hsl(213, 96%, 18%);
    opacity: 0.5;
    font-weight: 600;
}
.buttons_container {

    margin-top: 48px;
}
@media (max-width: 660px) {
    .form_section {
        background-color: white;
        position: absolute;
        padding: 16px;
        border-radius: 8px;
        top: -48px;
        gap: 18px;
        height: 85%;
        width: 95%;
        box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
}
.form {
    gap: 4px;
    font-size: 14px;
    gap: 12px;
}
.label_container {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin-bottom: -8px;
}
.buttons_container {
    display: flex;
    align-items: center;
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: white;
    left: 0;
    bottom: 0;
   
}

}
</style>