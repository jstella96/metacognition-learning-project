<template>
<div class="record__control">
    <div class="record__button record__play" :class="showInActive('play')" @click="changeState('play')">
        <div></div>
   </div>
    <div class="record__button record__pause" :class="showInActive('pause')" @click="changeState('pause')">
        <div></div>
        <div></div>
    </div>
    <div class="record__button record__stop"  :class="showInActive('stop')" @click="changeState('ready')">
        <div></div>
    </div>
</div>
</template>
<script>
export default {
  name: 'ControlBottom',
  data(){
    return{
      
    }
  },
  mounted(){


  },
  computed: {

  },
  props: {
    state: String
  },
  methods: {
    changeState(nextState){
        this.$emit('changeState',nextState);
    },
    showInActive(option){
        let nextClass = 'inactive';
        if( option === 'play' && ( this.state === 'ready' || this.state === 'pause' ) ){
            nextClass = '';
        }else if( option === 'pause' && this.state === 'play'){
            nextClass = '';
        }else if( option === 'stop' && ( this.state === 'play' || this.state === 'pause' ) ){
            nextClass = '';
        }
        return nextClass;
    }    
  },
}
</script>