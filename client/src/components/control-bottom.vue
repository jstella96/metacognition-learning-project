<template>
<div class="record__control">
    <div class="record__button record__play" :class="showInActive('play')" @click="changeState($event,'play')"></div>
    <div class="record__button record__pause" :class="showInActive('pause')" @click="changeState($event,'pause')"></div>
    <div class="record__button record__stop"  :class="showInActive('stop')" @click="changeState($event,'stop')"></div>
</div>
</template>
<script>
export default {
  name: 'ControlBottom',
  props: {
    state: String
  },
  methods: {
    changeState(event,nextState){
        if(!event.target.classList.contains('inactive')){
            this.$emit('changeState',nextState);
        }
    },
    showInActive(option){
        let nextClass = 'inactive';
        if( option === 'play' && ( this.state === 'ready' || this.state === 'pause' ||  this.state === 'stop') ){
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