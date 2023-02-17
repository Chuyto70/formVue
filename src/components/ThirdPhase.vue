<script>
import GoBackButton from './buttons/GoBackButton.vue';
import NextButton from './buttons/NextButton.vue';
import { store } from '../store';
    export default{
    components: { GoBackButton, NextButton },
    data() {
        return {
            isMultiplayerChecked: store.add_on_multi,
            isStorageChecked: store.add_on_storage,
            isCustomizableChecked: store.add_on_custom,
            arcadePlanValue:1,
            advancedPlanValue: 2,
            proPlanValue:2,
            isYearly: store.yearly
        }
    },
    computed:{
        multiplayerOn() {
            return this.isMultiplayerChecked ? 'selectedChoice' : ''
        },
        storageOn() {
            return this.isStorageChecked ? 'selectedChoice' : ''
        },
        customOn(){
             return this.isCustomizableChecked ? 'selectedChoice' : ''
        },
       
        isYearlyPay() {
            return this.isYearly ? 'yr' : 'mo'
        }
    },
    methods:{
        toLastPhase(){
            store.add_on_multi = this.isMultiplayerChecked
            store.add_on_storage = this.isStorageChecked
            store.add_on_custom = this.isCustomizableChecked
            store.page = 4
        }
    },
    beforeMount(){
        if(this.isYearly){
            this.advancedPlanValue = 20
            this.arcadePlanValue = 10
            this.proPlanValue = 20
        }
    }
}
</script>
<template>
    <div class="form_section animate__animated animate__fadeIn">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div class="optiones">
            <div ref="multiplayerContainer" class="add_ons" :class="multiplayerOn">
                <input v-model="isMultiplayerChecked" ref="multiplayer" type="checkbox" name="onlineService" id="multiplayer">
                
                    <label for="multiplayer">
                        <p>Online service</p>
                        <small>Access to multiplayer gamers</small>
                    </label>
                <small>+${{arcadePlanValue}}/{{isYearlyPay}}</small>
                
            </div>
            <div class="add_ons" :class="storageOn">
                 <input v-model="isStorageChecked" ref="storage" type="checkbox" id="storage">
                        <label for="storage">
                            <p>Larger storage</p>
                            <small>Extra 1TB of cloud save</small>
                        </label>
                    <small>+${{ advancedPlanValue }}/{{ isYearlyPay }}</small>
            </div>
            <div class="add_ons" :class="customOn">
                <input v-model="isCustomizableChecked" ref="customizable" type="checkbox" id="customizable">
                    <label for="customizable">
                        <p>Customizable Profile</p>
                        <small>Custom theme on your profile</small>
                    </label>
                <small>+${{proPlanValue }}/{{ isYearlyPay }}</small>
            </div>
        </div>
    </div>
    <div class="buttons_container">
        <GoBackButton />
        <NextButton @click="toLastPhase"/>
    </div>
</template>
<style >
.form_section {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 80%;
    height: 80%;
}
.form_section>p {
    font-weight: 600;
    opacity: 0.5;
    margin-bottom: 24px;
}   
.selectedChoice{
    background-color: hsl(217, 100%, 97%);
}
.add_ons{
    display: flex;
    position: relative;
    gap: 18px;
    border: 1px solid hsl(213, 96%, 18%);
    margin-bottom: 18px;
    padding: 18px;
    border-radius: 8px;
    transition: all 250ms;
}
.add_ons > small{
    align-self: center;
    position: absolute;
    right: 18px;
    font-weight: 600;
    opacity: .7;
}
label{
    cursor: pointer;
    width: 100%;
}
label p {
    font-weight: 600;
}
label small {
    font-weight: 600;
    opacity: .5;
}
input[type="checkbox"] {
    width: 16px;
    cursor: pointer;
}

@media (max-width: 660px) {
    .form_section {
        background-color: white;
        position: absolute;
        padding: 16px;
        border-radius: 8px;
        top: -48px;
        gap: 4px;
        height: auto;
        width: 95%;
        box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  
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
.add_ons{
    gap: 8px;
    border: 1px solid hsl(213, 96%, 18%);
    font-size: 14px;
    margin-bottom: 8px;
    padding: 12px;
    border-radius: 8px;
    transition: all 250ms;
}
}
</style>