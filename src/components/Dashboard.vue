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
        <ul class="messages">
            <li class="message left appeared">
                <div class="avatar"></div>
                
            </li>

        </ul>
        <div class="bottom_wrapper clearfix">
            <div class="message_input_wrapper">
                <input class="message_input" placeholder="Type your message here..." />
            </div>
            <div class="send_message">
                <div class="icon">

                </div>
                <div class="text">Send</div>
            </div>
        </div>
    </div>
    <div class="message_template">
        <li class="message">
            <div class="avatar">

            </div>
            <div class="text_wrapper">
                <div class="text">

                </div>
            </div>
        </li>
    </div>


    <button class="btn btn-danger btn-small signout-btn" @click="signOut">Sign Out</button>
    
    </div>
</template>


<script>
    import { firebaseApp, eventsRef } from '../firebaseApp'
    export default {
        methods: {
            signOut() {
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        }
    }
</script>
