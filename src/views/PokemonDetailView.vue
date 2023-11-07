<script setup lang="ts">
import type { PokemonDetails } from '@/types'
import PokemonCard from '@/components/PokemonCard.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pokemonName = route.params.pokemonName

const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
const pokemon: PokemonDetails = await res.json()
</script>

<template>
  <PokemonCard :pokemon="pokemon" />
</template>
