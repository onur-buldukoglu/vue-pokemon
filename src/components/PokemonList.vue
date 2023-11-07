<script setup lang="ts">
import type { PokemonListItem } from '../types/index'
import { defineProps } from 'vue'
import capitalize from '../helpers/capitalize'

const props = defineProps({
  pokemonList: { type: Array<PokemonListItem>, required: true }
})
</script>

<template>
  <div class="grid grid-cols-3 grid-flow-row gap-4 mb-8">
    <a
      v-for="pokemon in props.pokemonList"
      :key="props.pokemonList.indexOf(pokemon)"
      class="border border-accent text-slate-400 p-2 rounded text-center hover:bg-accent hover:text-slate-700"
      :href="`/${pokemon.name}`"
      >{{ capitalize(pokemon.name) }}</a
    >
  </div>
</template>
