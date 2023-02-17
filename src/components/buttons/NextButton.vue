<script>
export default {
  props:['confirm']

};
</script>
<template>
  <button  type="submit">{{confirm ? confirm : 'Next step'}}</button>
</template>
<style scoped>
button {
  font-family: Ubuntu;
  position: absolute;
  right: 55px;
  bottom: 38px;
  padding: 12px 16px;
  color: hsl(0, 0%, 100%, 0.9);
  background-color: hsl(213, 96%, 18%, 0.9);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms;
}
button:hover{
    background-color:hsl(213, 96%, 18%, 1) ;
    color: hsl(0, 0%, 100%, 1)
}
@media (max-width:660px) {
  button{
     right: 16px;
     bottom: auto;
  }
}
</style>
