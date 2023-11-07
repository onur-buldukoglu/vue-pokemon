<script setup lang="ts">
import type { PokemonListResponse, PokemonListItem } from '../types/index'
import type { Ref } from 'vue'
import ListPagination from '@/components/ListPagination.vue'
import PokemonList from '@/components/PokemonList.vue'
import { ref, watchEffect } from 'vue'

const pageNumber = ref(1)
const pokemonCount = ref(0)
const pokemonList: Ref<PokemonListItem[]> = ref([])

watchEffect(async () => {
  try {
    const response: PokemonListResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${(pageNumber.value - 1) * 24}&limit=24`
    ).then((res) => res.json())

    pokemonCount.value = response.count
    pokemonList.value = response.results
  } catch (error) {
    console.log(error)
  }
})
function changePageNumber(newPageNumber: number) {
  pageNumber.value = newPageNumber
}
</script>

<template>
  <main class="flex flex-col justify-between bg-slate-700 rounded p-8 w-[40rem]">
    <PokemonList :pokemon-list="pokemonList" />
    <ListPagination @changePage="changePageNumber" :pokemon-count="pokemonCount" />
  </main>
</template>
