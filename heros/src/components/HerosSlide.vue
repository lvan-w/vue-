<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" :to="{'name': 'heros'}" active-class="active">
        <a>英雄列表</a>
      </router-link>
      <router-link tag="li" :to="{'name': 'weapon'}" active-class="active">
        <a>武器列表</a>
      </router-link>
      <router-link tag="li" :to="{'name': 'skill'}" active-class="active">
        <a>技能列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
