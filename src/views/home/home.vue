<template>
    <div>
        <div class="homeCls">
            <h1>Home</h1>
            <!-- <router-link :to="{name: 'Book1'}">go to Book1</router-link> -->
            <ul>
                <li>
                    <a @click="goBook1">Go To Book1</a>
                </li>
                <li>
                    <a @click="goBook2">Go To Book2</a>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
      goBook1: function() {
          this.$router.push({
              name: 'Book1'
          })
      },
      goBook2: function() {
          this.$router.push({
              name: 'Book2'
          })
      }
  }
}
</script>

<style>
    .homeCls{
        font-size: 40px;
        color: #ccc;
    }
</style>
