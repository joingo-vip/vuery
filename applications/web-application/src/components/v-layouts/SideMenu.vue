<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--SideMenu.vue: 侧边栏菜单组件-->
<template>
  <div role="v-side-menu" class="v-sidemenu" :style="[$inlineOverridableStyles]">
    <v-flexbox direction="column" class="v-sidemenu__container">
      <v-flexbox-item class="w-100p">
        <div class="pd-10 v-sidemenu__title">
          <v-flexbox class="w-100p" justify="space-between" align-items="center">
            <v-flexbox-item>
              <span>{{ title }}</span>
            </v-flexbox-item>
            <v-flexbox-item>
              <div class="pd-lt-20">
                <v-mdi icon-name="" :rotate="45" class="clickable" />
              </div>
            </v-flexbox-item>
          </v-flexbox>
        </div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { type SideMenuProperty } from './defs';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';
import vMdi from '../v-mdi/Mdi.vue';
import { computed } from 'vue';

/**
 * 定义了组件 “SideMenu.vue” 的属性。
 */
const $props = defineProps<SideMenuProperty>();

/**
 * 内联的可覆盖样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => $props.overridableStyles);
</script>

<style lang="scss">
@use './style/v-sidemenu.scss';
</style>
