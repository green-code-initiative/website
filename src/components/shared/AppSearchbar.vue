<script lang="ts" setup>
const model = defineModel<string>({
  default: ''
});
</script>

<template>
<div class="search-container">
    <input type="text"
    class="searchbar"
    v-model="model"
    placeholder="Rechercher... "/>
</div>
</template>
<style lang="scss" scoped>

.search-container {
  display: flex;
}

.searchbar {
  width: 100%;
  padding: 10px 45px;
  background: white url("@/assets/icons/search.svg") no-repeat 12px center;
  background-size: 24px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
