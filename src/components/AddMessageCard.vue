<template>
    <div>
     <li class="message left appeared" v-if="!userEmail(event.email)">
                <div class="avatar"></div>
                  <div class="text_wrapper">
                    <div class="text">
                        {{event.message}}
                    </div>
                </div>
            </li>
            
              <li class="message right appeared"  v-if="userEmail(event.email)">
                <div class="avatar"></div>
                  <div class="text_wrapper">
                    <div class="text">
                       {{event.message}}
                    </div>
                </div>
            </li>
        </div>
</template>
<script>
    export default{
        props:['event', 'index'],
        methods:{
          userEmail(email){
            if(email == this.$store.state.user.email){
              return true
            }else{
              return false
            }
          }
        }
    }
</script>
