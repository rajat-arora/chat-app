<template>
     <div class="bottom_wrapper clearfix">
            <div class="message_input_wrapper">
               <input id="lol" v-on:keyup.enter="addMessage"  v-model="event.message" type="text" name="lol" class="message_input" placeholder="Enter a message"/>
            </div>
            <div class="send_message">
                <div class="icon">
                </div>
                <div class="text" @click="addMessage">Submit</div>
            </div>
        </div>
</template>
<script>
    import { eventsRef } from '../firebaseApp'
    
    export default{
        data(){
            return{
                event:{
                    message:'',
                    email:''
                }
            }
        },
        methods:{
            addMessage(){
                this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event);
                this.event.message=''
                }
        }
    }
</script>