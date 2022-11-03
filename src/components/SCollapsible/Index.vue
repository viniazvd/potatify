<template>
  <div :ref="randomRef" class="s-collapsible">
    <div v-if="!noHeader" class="header" @click="$emit('toggle', !isOpened)">
      <slot name="header">X</slot>
    </div>

    <div
      ref="wrapper"
      class="wrapper"
      :style="{
        opacity: +isOpened,
        height: isOpened ? (height || contentHeight) + 'px' : 0
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SCollapsible',

  props: {
    height: Number,
    noHeader: Boolean,
    outsideClosable: Boolean,
    isOpened: { type: Boolean, required: true }
  },

  data: () => ({ observer: null as null | { observe: Function, disconnect: Function }, contentHeight: 0 }),

  mounted () {
    const target: HTMLElement = this.$refs.wrapper

    const config = { childList: true, subtree: true, attributes: true }
    const callback = (elements: any[]) => elements.forEach(({ target }) => {
      this.$emit('target', target)
      this.contentHeight = target.scrollHeight
    })

    this.observer = new MutationObserver(callback)
    this.observer.observe(target, config)

    this.contentHeight = target.scrollHeight

    document.addEventListener('click', this.clickOutside)
  },

  computed: {
    randomRef () {
      return 'ref:' + Math.floor(Math.random() * 1000)
    }
  },

  methods: {
    contains (event: { target: HTMLInputElement }) {
      return (this.$refs[this.randomRef] as { contains: Function })?.contains(event?.target)
    },

    clickOutside (event: { target: HTMLInputElement }) {
      if (!this.contains(event) && this.outsideClosable) this.$emit('toggle', false)
    }
  },

  beforeDestroy () {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('click', this.clickOutside)
  }
}
</script>

<style lang="scss">
.s-collapsible {
  & > .wrapper {
    overflow: hidden;
    transition: opacity .3s ease-in, height .3s ease-in-out !important;
  }
}
</style>