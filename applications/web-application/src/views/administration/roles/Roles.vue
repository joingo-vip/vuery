<!--
  // *******************************************************************************************************************************************************
  // LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION. 
  // COPYRIGHT © 2023 BEIJING JOINGO.VIP INFORMATION TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.
  // *******************************************************************************************************************************************************
-->

<!--Roles.vue: 角色列表视图-->
<template>
  <v-main>
    <v-action-area :title="$t('default:sidemenuItems.applicationRoles')">
      <v-processbox :in-processing="rolesTable.loading">
        <v-databox>
          <template #search-area> </template>
        </v-databox>
      </v-processbox>
    </v-action-area>
  </v-main>
</template>

<script lang="ts" setup>
import { vActionArea, vDatabox, vMain, vProcessbox } from '~/components/index.mjs';
import { type ObservableRolesTable } from './defs';
import { ref } from 'vue';

/**
 * 列表数据。
 */
const rolesTable = ref<ObservableRolesTable>({
  data: [],
  currentPageIndex: 1,
  rowsPerPage: 10,
  totalRows: 0,
  sizesOptions: [10, 20, 50, 100],
  loading: false,
  filter: {},
});
</script>

<style lang="scss" scoped></style>
