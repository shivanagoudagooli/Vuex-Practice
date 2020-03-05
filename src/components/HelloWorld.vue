<template>
  <div>
   {{getCount}}<br>
   {{count}}<br>
   <button @click="Add">click</button><br>
   <!-- {{getName}}<br> -->
   {{doneTodos}}<br>
   {{getIncrement}}<br>
    {{doneTodosCount}}<br>
   {{doneTodoById(2)}}<br>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  data(){
    return{
      number:'',
      count:1
    }
  },
computed:{
  ...mapGetters([
  'getCount',
  'getName',
  'doneTodos',
  'doneTodosCount',
  'doneTodoById',
  'getIncrement']),
  count1(){
    return this.$store.state.count; 
  },

},
 mounted() {
   this.call();
},
methods:{
  ...mapMutations([
    'setCount',
    'setName',
    'setIncrement']),
  ...mapActions(['actCallApi']),
  Add(){
    this.count++ ;
  },
  call(){
      this.actCallApi().then(Response =>{
          console.log(Response)
          this.setName(Response)
          console.log("api")
        },(error)=>{
            console.log(error)
          }
        );
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
