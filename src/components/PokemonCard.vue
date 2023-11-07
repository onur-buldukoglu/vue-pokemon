<script setup lang="ts">
import type { PokemonDetails } from '@/types'
import type { PropType } from 'vue'
import capitalize from '@/helpers/capitalize'
import { defineProps } from 'vue'
const props = defineProps({
  pokemon: { type: Object as PropType<PokemonDetails>, required: true }
})
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl border border-accent">
    <figure class="p-12">
      <img
        :src="props.pokemon.sprites.other.dream_world.front_default"
        :alt="`Image of ${props.pokemon.name}`"
      />
    </figure>
    <div class="card-body border-t border-t-accent">
      <h2 class="card-title">
        <span>#{{ props.pokemon.order }}</span
        >{{ capitalize(props.pokemon.name) }}
      </h2>
      <div class="card-actions justify-end">
        <div
          v-for="pokeType in props.pokemon.types"
          :key="props.pokemon.types.indexOf(pokeType)"
          class="badge badge-outline"
        >
          {{ capitalize(pokeType.type.name) }}
        </div>
      </div>
    </div>
  </div>
</template>
