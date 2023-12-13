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
          <template #search-area>
            <!-- 视图：Roles.vue 角色查询条件区域 -->
            <el-form
              ref="role-search-form"
              :label-suffix="$t('default:symbols.colon')"
              label-width="auto"
              label-position="right"
              inline
            >
              <el-form-item :label="$t('modules:roles.label.code')">
                <el-input v-model="rolesTable.filter.code" :placeholder="$t('modules:roles.placeholder.code')" clearable>
                </el-input>
              </el-form-item>
              <el-form-item :label="$t('modules:roles.label.name')">
                <el-input v-model="rolesTable.filter.name" :placeholder="$t('modules:roles.placeholder.name')" clearable>
                </el-input>
              </el-form-item>
              <el-form-item :label="$t('default:status')">
                <el-select v-model="rolesTable.filter.enabled" class="w-100">
                  <el-option
                    v-for="(item, index) in EnabledStateOptions"
                    :key="`role-status__${index}`"
                    :label="$t(item.value)"
                    :value="item.key"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button-group>
                  <el-button type="primary">{{ $t('default:query') }}</el-button>
                  <el-button type="primary">{{ $t('default:reset') }}</el-button>
                </el-button-group>
              </el-form-item>
            </el-form>
          </template>
        </v-databox>
      </v-processbox>
    </v-action-area>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { vActionArea, vDatabox, vMain, vProcessbox } from '~/components/index.mjs';
import { DefaultRoleFilters, EnabledStateOptions } from '~/lib/index.mjs';
import { type ObservableRolesTable } from './defs';

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
  filter: DefaultRoleFilters,
});
</script>

<style lang="scss" scoped></style>
