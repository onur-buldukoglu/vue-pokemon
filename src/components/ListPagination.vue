<script setup lang="ts">
import { ref, watchEffect, defineProps, computed } from 'vue'
import range from '../helpers/range'
const props = defineProps({
  pokemonCount: { type: Number, required: true }
})
const emit = defineEmits(['changePage'])
const activePageNumber = ref(1)
const pageGroupNumber = ref(0)
const pageNumberRange = ref(range(10))

const lastPageNumber = computed(() => {
  return Math.round(props.pokemonCount / 24)
})

function handleChangePageClick(pageNumber: number) {
  activePageNumber.value = pageNumber
  emit('changePage', pageNumber)
}

function jumpForwardTenPages() {
  emit('changePage', activePageNumber.value + 10)
  activePageNumber.value += 10
  pageGroupNumber.value += 1
}

function jumpBackTenPages() {
  emit('changePage', activePageNumber.value - 10)
  activePageNumber.value -= 10
  pageGroupNumber.value -= 1
}

watchEffect(() => {
  pageNumberRange.value = Array.from(range(10), (number) => number + 10 * pageGroupNumber.value)
})
</script>

<template>
  <div class="join self-center">
    <button
      class="join-item btn btn-accent"
      :disabled="pageGroupNumber <= 0"
      @click="jumpBackTenPages"
    >
      &lt;&lt;
    </button>
    <template v-for="pageNumber in pageNumberRange" :key="pageNumber">
      <button
        :class="[{ 'btn-active': activePageNumber === pageNumber }, 'join-item btn btn-accent']"
        v-if="pageNumber <= lastPageNumber"
        @click="handleChangePageClick(pageNumber)"
      >
        {{ pageNumber }}
      </button></template
    >
    <button
      class="join-item btn btn-accent"
      :disabled="(pageGroupNumber + 1) * 10 > lastPageNumber"
      @click="jumpForwardTenPages"
    >
      &gt;&gt;
    </button>
  </div>
</template>
