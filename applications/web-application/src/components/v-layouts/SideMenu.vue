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
            <v-flexbox-item v-show="!sideMenuCollapsed">
              <span>{{ title }}</span>
            </v-flexbox-item>
            <v-flexbox-item>
              <div class="pd-lt-20">
                <v-mdi
                  :icon-name="sideMenuCollapsed ? 'PinOutline' : 'PinOffOutline'"
                  :rotate="45"
                  class="clickable"
                  :title="$t(`default:${sideMenuCollapsed ? 'pin' : 'unpin'}`)"
                  @click="onPinIconClick"
                />
              </div>
            </v-flexbox-item>
          </v-flexbox>
        </div>
      </v-flexbox-item>
      <v-flexbox-item :scale-up="1" class="w-100p no-height">
        <div class="w-100p h-100p use-vertical-scrollbar">
          <div
            class="v-sidemenu__item"
            v-for="item in menuItems"
            :key="`side-menu-item__${item.id}`"
            :aria-actived="item.id === activedItemId"
            @click="onMenuItemClick(item)"
          >
            <div>
              <v-flexbox align-items="center">
                <v-flexbox-item role="icon">
                  <template v-if="(item.icons?.actived ?? '').trim() !== ''">
                    <img :src="item.id === activedItemId ? item.icons.actived : item.icons.unactived ?? item.icons.actived" />
                  </template>
                </v-flexbox-item>
                <v-flexbox-item role="text" class="pd-lt-20 pd-rt-20 small-text" v-show="!sideMenuCollapsed">{{
                  $t(item.resourceKeyOfText)
                }}</v-flexbox-item>
              </v-flexbox>
            </div>
          </div>
        </div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useUIStore } from '~/lib/index.mjs';
import vFlexbox from '../v-flexbox/Flexbox.vue';
import vFlexboxItem from '../v-flexbox/FlexboxItem.vue';
import vMdi from '../v-mdi/Mdi.vue';
import { type SideMenuEmits, type SideMenuItemOptions, type SideMenuProperty } from './defs';

const uiStore = useUIStore();
const { sideMenuCollapsed } = storeToRefs(uiStore);

/**
 * 当前组件的路由上下文。
 */
const $routeContext = {
  /**
   * 全局路由管理程序。
   */
  router: useRouter(),
  /**
   * 当前的路由信息。
   */
  route: useRoute(),
};

/**
 * 定义了组件 “SideMenu.vue” 的事件。
 */
const $emits = defineEmits<SideMenuEmits>();

/**
 * 定义了组件 “SideMenu.vue” 的属性。
 */
const $props = defineProps<SideMenuProperty>();

/**
 * 当前选中的菜单项唯一标识。
 */
const activedItemId = ref<string>($props.default);

/**
 * 内联的可覆盖样式。
 */
const $inlineOverridableStyles = computed<Record<string, any>>(() => $props.overridableStyles);

/**
 * 用于处理 “HTML” 组件的 “MenuItemClick” 事件
 * @remarks
 *  用于处理侧边栏菜单项单击事件。
 *
 * @private
 */
function onMenuItemClick(item: SideMenuItemOptions): void {
  /**
   * 触发组件的 “ItemClick” 事件。
   *
   * @private
   * @see {@link $emits}
   */
  function $onItemClick(): void {
    $emits('item-click', { payload: item });
  }

  if (item.enabled ?? true) {
    activedItemId.value = item.id;
    if (!String.isNullOrWhitespace(item.routePath)) {
      $routeContext.router.push({ path: item.routePath, query: { 'route-id': item.id } });
    }
    $onItemClick();
  }
}

/**
 * 用于处理 “Mdi” 组件的 “PinIconClick” 事件
 * @remarks
 *  用于处理固定侧边栏图标按钮单击事件。
 *
 * @private
 */
function onPinIconClick(): void {
  sideMenuCollapsed.value = !sideMenuCollapsed.value;
}

onMounted(() => {
  if (!String.isNullOrWhitespace($routeContext.route.query['route-id'] as string)) {
    activedItemId.value = ($routeContext.route.query['route-id'] as string).trim();
  }
});
</script>

<style lang="scss">
@use './style/v-sidemenu.scss';
</style>
