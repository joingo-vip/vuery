<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--RootSection.vue: 根节点布局视图-->
<template>
  <div class="w-100p h-100p root-section">
    <v-layout>
      <template #left-side>
        <v-side-menu
          :default="$sidemenuOptions.default"
          :menu-items="$sidemenuOptions.menuItems"
          :title="$t('default:sidemenuItems.administrateTitle')"
        ></v-side-menu>
      </template>
      <template #default>
        <router-view #default="{ Component }">
          <v-transitionbox enter-class-name="slideInRight" exit-class-name="slideOutLeft">
            <component :is="Component"></component>
          </v-transitionbox>
        </router-view>
      </template>
    </v-layout>
  </div>
</template>

<script lang="ts" setup>
import { vLayout, vSideMenu, SideMenuProperty, vTransitionbox } from '~/components/index.mjs';
import { SideMenuConfiguration, isAdministrateMode } from '~/lib/index.mjs';
import { computed } from 'vue';

/**
 * 侧边栏菜单配置选项。
 */
const $sidemenuOptions = computed<SideMenuProperty>(() => {
  if (isAdministrateMode()) return SideMenuConfiguration.administrate as SideMenuProperty;
  // TODO: 此处为模拟代码，请酌情修改。
  console.log(
    '%cTODO: 脚本 “RootSection.vue” 中包含了模拟代码。<fdda42>',
    'background-color: #BF360C; color: #FFEB3B; font-weight: bold; padding: 5px 10px'
  );
  return SideMenuConfiguration.administrate as SideMenuProperty;
});
</script>

<style lang="scss" scoped></style>
