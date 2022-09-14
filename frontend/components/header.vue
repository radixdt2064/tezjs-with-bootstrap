<script setup lang="ts">
import { ref } from "vue";

defineProps<{ data: any }>();
</script>
<template>
 <TezLazy class="position-fixed top-0 w-100 shadow-sm fixed-top" :sourcePath="data.dynamicSourcePath" v-slot="source">
  <header>
      <nav class="navbar navbar-expand-lg navbar-light" aria-label="Eleventh navbar example">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" v-for="category in source.items" v-bind:key="category.slug">
                <tez-link :to="category.slug" class="nav-link ">
                  {{ category.title }}
                </tez-link>
              </li>
            </ul>
            <div>
              hello
            </div>
          </div>
        </div>
      </nav>
  </header>
</TezLazy>
</template>
<style lang="css">
.toggle-menu:checked ~ div{
  display: block !important;
}
</style>