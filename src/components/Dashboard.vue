<template>
    <div>
        
    <div class="chat_window">
        <div class="top_menu">
            <div class="buttons">
                <div class="button close" @click="signOut">

                </div>
                <div class="button minimize">

                </div>
                <div class="button maximize">

                </div>
            </div>
            <div class="title">Chat</div>
        </div>
        <ul id="me" class="messages" v-chat-scroll>
           <AddMessageCard
            v-for="(event_item,index) in this.$store.state.events"
            :event="event_item"
            :index = "event_item.key"
            key="index"/>
        </ul>
       <AddMessage/>
    </div>
    
    </div>
</template>


<script>
    import { firebaseApp, eventsRef } from '../firebaseApp'
    import AddMessage from './AddMessage.vue'
    import AddMessageCard from './AddMessageCard.vue'
    var mergeJSON = require("merge-json");


    export default {
        methods: {
            signOut() {
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        },
         components:{
            AddMessage,
            AddMessageCard
        },
        
       mounted(){
        eventsRef.on('value', snap =>{
            let events =[]
            snap.forEach(event=>{
                var key = {key:event.key}
                var result = mergeJSON.merge(key, event.val());
                //console.log(result)
                events.push(result)
            })
            this.$store.dispatch('setEvents', events )

        })
        


    }
    }
</script>
