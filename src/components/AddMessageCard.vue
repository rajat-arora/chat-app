<template>
    <div>
     <li class="message left appeared" v-if="!userEmail(event.email)">
                <div class="avatar"></div>
                  <div class="text_wrapper">
                    <div class="text">
                      <div v-if="!checkIfGiphy(event.message)"> {{event.message}}</div>
                        <img v-if="checkIfGiphy(event.message)" v-bind:src="event.message" ></img>

                    </div>
                    <h4 class="pull-right"> From: {{event.email}}</h4>
                </div>
            </li>
            
              <li class="message right appeared"  v-if="userEmail(event.email)">
                <div class="avatar"></div>
                  <div class="text_wrapper">
                   <button class="close" @click="removeJoke(index)"><span>&times;</span></button>

                    <div class="text">
                         <div v-if="!checkIfGiphy(event.message)"> {{event.message}}</div>
                        <img v-if="checkIfGiphy(event.message)"  v-bind:src="event.message"></img>
                    </div>
                </div>
            </li>
        </div>
</template>
<script>
import {firebaseApp, eventsRef} from '../firebaseApp'

    export default{
        props:['event', 'index'],
        methods:{
          userEmail(email){
            if(email == this.$store.state.user.email){
              return true
            }else{
              return false
            }
          },
          removeJoke(index){
                console.log("hello")
                eventsRef.child(this.event.key).remove(function(error) {
   // alert(error ? "Uh oh!" : "Success!");
});
            },
            checkIfGiphy(text){
              if(text.match(".gif") || text.match("giphy")){
                return true
              }else{
                return false
              }
            }
        }
    }
</script>
