<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

</script>
<template>
  <div class="w-screen h-screen flex flex-col relative  text-gray-800 dark">
    <Header />
    <div class="pt-12 pl-20 w-full h-full bg-gray-100  dark:bg-dark-600 dark:text-gray-100">
      <Sidebar />
      <div
        class="catalogue grid grid-cols-3 lg:grid-cols-5 justify-start gap-4 p-4 pt-14 w-full h-full overflow-y-auto overflow-x-hidden">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
