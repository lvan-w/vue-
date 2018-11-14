import Vue from 'vue';
import Router from 'vue-router';
// 引入组件
import Heros from '@/views/heros/Heros.vue';
import HerosAdd from '@/views/heros/HerosAdd.vue';
import HerosEdit from '@/views/heros/HerosEdit.vue';
import Weapon from '@/views/weapon/Weapon.vue';
import Skill from '@/views/skill/Skill.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 当请求根据目录时，我们要跳转到/heros中
    {
      name: 'root',
      path: '/',
      redirect: {'name': 'heros'}
    },
    {
      name: 'heros',
      path: '/heros',
      component: Heros
    },
    {
      name: 'herosAdd',
      path: '/heros/Add',
      component: HerosAdd
    },
    {
      name: 'HerosEdit',
      path: '/heros/Edit/:id', // /heros/edit/101010101010
      component: HerosEdit
    },
    {
      name: 'weapon',
      path: '/weapon',
      component: Weapon
    },
    {
      name: 'skill',
      path: '/skill',
      component: Skill
    }
  ]
});
