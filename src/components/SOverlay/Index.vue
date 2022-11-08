<!-- <template>
  <transition name="s-overlay-fade">
    <div
      v-if="show"
      :class="classes"
      @click="$emit('close')"
    />
  </transition>
</template>

<script lang="ts">
/**
 * Overlay component, used to give focus to a fixed element that appears
 * on the screen.
 */
export default {
  name: 'SOverlay',

  props: {
    /**
     * Whether to show or not the overlay
     */
    show: { type: Boolean },

    /**
     * Makes the overlay completely transparent.
     */
    transparent: { type: Boolean },

    /**
     * Makes the background slightly darker.
     */
    dark: { type: Boolean  }
  },

  computed: {
    classes () {
      return [ 's-overlay',
        {
          '--dark': this.dark,
          '--transparent': this.transparent
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-overlay {
  position: fixed;
  top: 0;
  left: 0;
  // z-index: $z-index-3;

  height: 100vh;
  width: 100vw;

  background-color: color(base, light);

  &.--transparent { opacity: .1; }
  &.--dark { background-color: color(base, dark); }
}

.s-overlay-fade {
  @at-root {
    #{&}-enter-active,
    #{&}-leave-active {
      transition: opacity .3s ease !important;
    }

    #{&}-enter,
    #{&}-leave-to {
      opacity: 0 !important;
    }
  }
}
</style> -->