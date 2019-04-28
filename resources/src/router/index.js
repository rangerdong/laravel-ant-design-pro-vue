import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

Vue.use(Router)
function getRouteBase() {
  let base = '/';
  let env_base = process.env.MIX_ADMIN_BASE;
  console.log(env_base);
  if (env_base != undefined || env_base != '') {
    base += env_base + '/';
  }
  return base;
}

export default new Router({
  mode: 'history',
  base: getRouteBase(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
