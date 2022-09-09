<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
 <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source">
  <p>Header</p>
</TezLazy>
</template>