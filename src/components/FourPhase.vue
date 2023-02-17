<script>
import GoBackButton from './buttons/GoBackButton.vue';
import NextButton from './buttons/NextButton.vue';
import { store } from '../store';
    export default {
    components: { GoBackButton, NextButton },
    data() {
        return {
            listOfExtras:[],
            isYear:store.yearly,
            totalValue: store.planSelected
        }
    },
    computed:{
        nameOfPlan(){
            if(store.planSelected === 9 || store.planSelected === 90 ){
                return `Arcade (${store.yearly ? 'Yearly' : 'Monthly'})`
            } else if (store.planSelected === 12 || store.planSelected === 120) {
                return `Advanced (${store.yearly ? 'Yearly' : 'Monthly'})`
            }else{
                 return `Pro (${store.yearly ? 'Yearly' : 'Monthly'})`
            }
            
        },
        valueOfPlanSelected(){
            return store.planSelected
        }
    },
    beforeMount(){
        for(const items in store){
           if(items.includes('add_on') && store[items] ===true){
            
                if(items.includes('add_on_multi')){
                    
                    this.listOfExtras.push({name:'Online service', value: this.isYear ? 10 : 1})

                    this.totalValue += (this.isYear ? 10 : 1)
                }else{
                    let serviceName = ''
                    if(items.includes('storage')){
                        serviceName = 'Larger storage'
                    }else{
                        serviceName = 'Customizable profile'
                    }
                    this.listOfExtras.push({ name: serviceName, value: this.isYear ? 20 : 2 })
                    this.totalValue += (this.isYear ? 20 : 2)
                }
               
           }  
        }
    },
    methods:{
        lastPhase(){
            store.done =true
        },
        goToSecondPhase(){
            store.page = 2
        }
    }
}
</script>
<template>
    <div class="form_section animate__animated animate__fadeIn">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div class="bill_container">
            <div class="bill_element">
                <div class="bill_element_content">
                     <p>{{ nameOfPlan }}</p>
                     <a href="#" @click="goToSecondPhase">Change</a>
                </div>
                 <p>${{ valueOfPlanSelected }}/{{isYear ? 'yr' : 'mo'}}</p>
            </div>
            <hr>
            <div class="listOfServices" v-for="(extra, index) in listOfExtras" :key="index">
                <span>{{ extra.name }}</span>
                <span>+${{ extra.value }}/{{isYear ? 'yr' : 'mo'}}</span>
            </div>
        </div>
        <div class="bill_total">
            <span>Total (per {{ isYear ? 'year' : 'month' }})</span>
            <span>${{ totalValue }}/{{ isYear ? 'yr' : 'mo' }}</span>
        </div>
    </div>
    
     <div class="buttons_container">
            <GoBackButton />
            <NextButton @click="lastPhase" class="nextButton" confirm="Confirm"/>
        </div>
</template>
<style scoped>
.bill_container{
    background-color: hsl(217, 100%, 97%);
    padding: 18px;
    border-radius: 8px;
}
.bill_element{
    display: flex;
    justify-content: space-between;
}
.bill_element p{
    color: hsl(213, 96%, 18%);
    font-weight: 600;
}
.bill_element_content p{
    margin-bottom: 4px;
}
.bill_element_content a{
    color:hsl(213, 96%, 18%) ;
    opacity: .5;
    font-weight: 600;
}
hr{
    margin: 18px 0;
}
.listOfServices{
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
}
.listOfServices :first-child{
    font-weight: 600;
    opacity: .5;
}
.listOfServices :last-child {
    font-weight: 600;
    opacity: .7;
}
.bill_total{
    display: flex;
    justify-content: space-between;
    padding: 18px;
}
.bill_total :first-child {
    font-weight: 600;
    opacity: .5;
}
.bill_total :last-child{
    font-weight: 600;
    color: hsl(243, 100%, 62%);
    font-size: 18px;
}
.nextButton{
    background-color: hsl(243, 100%, 62%);
    color: white;
}
</style>