<template>
    <div class="content">
       <slot></slot>
    </div>
</template>

<script>
    export default{
        name:"content"
    }
</script>
<style lang="" scoped>
  .header ~ .content { padding-top: 45px}
  .footer ~ .content { padding-bottom: 50px}
</style>