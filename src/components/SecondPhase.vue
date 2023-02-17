<script>
import NextButton from './buttons/NextButton.vue'
import GoBackButton from './buttons/GoBackButton.vue'
import {store} from '../store'
    export default {
    components: { NextButton, GoBackButton },
    data() {
        return {
            activeToggle:store.yearly,
            arcadePrice: 9,
            advancedPrice: 12,
            proPrice:15,
            cardsArr: []
        }
    },
    mounted() {
        this.verifyPlan()
        this.converPrices(this.activeToggle)
        this.$refs.input.addEventListener('click', ()=>{
            this.activeToggle = !this.activeToggle
            store.planSelected = 0
            store.yearly = this.activeToggle
            this.$refs.arcade.classList.remove('selected')
            this.$refs.advanced.classList.remove('selected')
            this.$refs.pro.classList.remove('selected')
            this.converPrices(this.activeToggle)   
        })
        this.$refs.arcade.addEventListener('click', ()=>{
            this.$refs.arcade.classList.add('selected')
            store.planSelected = this.arcadePrice
            this.$refs.advanced.classList.remove('selected')
            this.$refs.pro.classList.remove('selected')
        })
        this.$refs.advanced.addEventListener('click', () => {
            this.$refs.arcade.classList.remove('selected')
            this.$refs.advanced.classList.add('selected')
            store.planSelected = this.advancedPrice
            this.$refs.pro.classList.remove('selected')
        })
        this.$refs.pro.addEventListener('click', () => {
            this.$refs.arcade.classList.remove('selected')
            this.$refs.advanced.classList.remove('selected')
            this.$refs.pro.classList.add('selected')
            store.planSelected = this.proPrice
        })  
        
    },
    methods: {
        
        verifyPlan() {
            if (store.planSelected === 90 || store.planSelected === 9){
                this.$refs.arcade.classList.add('selected')
                this.$refs.advanced.classList.remove('selected')
                this.$refs.pro.classList.remove('selected')
            } else if (store.planSelected === 120 || store.planSelected === 12){
                this.$refs.arcade.classList.remove('selected')
                this.$refs.advanced.classList.add('selected')
                this.$refs.pro.classList.remove('selected')
            } else{
                this.$refs.arcade.classList.remove('selected')
                this.$refs.advanced.classList.remove('selected')
                this.$refs.pro.classList.add('selected')
            }
        } ,
        converPrices(checked) {
            if(checked){
                this.arcadePrice = this.arcadePrice * 10
                this.advancedPrice = this.advancedPrice * 10
                this.proPrice = this.proPrice * 10
            }else{
                this.arcadePrice = 9
                this.advancedPrice = 12
                this.proPrice = 15
            }
        },
        toThreePhase(){
            if(store.planSelected ===0){
                return
            }
            store.page = 3
            
        }
    }
  
}
</script>
<template>
    <div class="form_section animate__animated animate__fadeIn">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div class="options_container">
            <div class="cards_container">
                <div ref="arcade" class="card selected ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                            <path fill="#FFF" fill-rule="nonzero"
                                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" />
                        </g>
                    </svg>
                    <div class="card_content">
                        <p>Arcade</p>
                        <small >${{arcadePrice}}/mo</small>
                        <small class="animate__animated animate__fadeInUp" v-if="activeToggle" id="yearlyFree">2 months free</small>
                    </div>
                </div>
               <div ref="advanced" class="card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="20" cy="20" r="20" fill="#F9818E" />
                            <path fill="#FFF" fill-rule="nonzero"
                                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" />
                        </g>
                    </svg>
                    <div class="card_content">
                        <p>Advanced</p>
                        <small>${{advancedPrice}}/mo</small>
                        <small class="animate__animated animate__fadeInUp" v-if="activeToggle" id="yearlyFree">2 months free</small>
                    </div>
                </div>
                <div ref="pro" class="card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="20" cy="20" r="20" fill="#483EFF" />
                            <path fill="#FFF" fill-rule="nonzero"
                                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" />
                        </g>
                    </svg>
                    <div class="card_content">
                        <p>Pro</p>
                        <small>${{proPrice}}/mo</small>
                        <small class="animate__animated animate__fadeInUp" v-if="activeToggle" id="yearlyFree">2 months free</small>
                    </div>
                </div>
            </div>
            <div class="toggle_container">
                <p :class="!activeToggle ? 'activeToggle': ''">Monthly</p>
                <input ref="input" class="offscreen" id="toggle" type="checkbox" :checked="activeToggle">
                <label for="toggle" class="switch"></label>
                <p :class="activeToggle ? 'activeToggle': ''" >Yearly</p>
            </div>
        </div>
    </div>
    <div class="buttons_container">
        <GoBackButton/>
        <NextButton @click="toThreePhase"/>
    </div>
</template>
<style scoped>
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
.cards_container{
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 28px;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 130px;
    height: 150px;
    padding: 18px;
    border: 1px solid hsl(228, 100%, 84%);
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms;
}
.card:hover{
    border: 1px solid hsl(243, 100%, 62%);
}
.card_content > p{
    color: hsl(213, 96%, 18%);
    font-weight: 600;
    margin-bottom: 4px;
}
.card_content small {
    font-weight: 600;
    opacity: 0.5;
    
}
.toggle_container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    width: 100%;
    height: 44px;
    background-color: hsl(206, 94%, 87%,.2);
    font-weight: 600;
    font-size: 14px;
    color:hsl(213, 96%, 18%, .5) ;
    border-radius: 12px;
    
}
.activeToggle {
    color: hsl(213, 96%, 18%);

    transition: all 200ms;
}

.switch{
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
    background-color:hsl(213, 96%, 18%) ;
    border-radius: 40px;
    cursor: pointer;
}
.switch::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 4px;
    top: 4px;
    border-radius: 30px;
    background-color: white;
    transition: all 250ms;
}
input[type="checkbox"]:checked + .switch::after {
    transform: translateX(16px);
}

.offscreen{
    position: absolute;
    left:-99999999999999999px;
}
.selected {
    background-color: hsl(217, 100%, 97%);
}
#yearlyFree {
    opacity: 1;
    display: block;
    color: hsl(213, 96%, 18%);
    font-weight: 600;
    font-size: 12px;
    margin-top: 4px;
    transition: all 250ms;
}
@media (max-width: 660px) {
    .form_section {
        background-color: white;
        position: absolute;
        padding: 16px;
        border-radius: 8px;
        top: -48px;
        gap: 0px;
        height: auto;
        width: 95%;
        box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 1px 10px 18px -17px rgba(0, 0, 0, 0.82);
}
.cards_container{
    display: flex;
    flex-direction: column;
    gap: 8px    ;
}
.card{
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    font-size: 13px;
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