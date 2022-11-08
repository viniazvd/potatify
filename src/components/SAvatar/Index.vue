<!-- <template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    validator: function (value: string) {
      return ['p', 'm', 'g'].indexOf(value) !== -1
    },
    default: 'm'
  },

  color: {
    type: String,
    validator: function (value: string) {
      return ['light', 'dark'].indexOf(value) !== -1
    },
    default: 'light'
  }
})

const classes = computed(() => [
  's-avatar',
  `--is-size-${props.size}`,
  `--is-color-${props.color}`
])
</script>

<style lang="scss">
@import "./src/styles/_index.scss";
.s-avatar {
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: color(neutral, base);
  overflow: hidden;
  .s-image {
    margin-top: 4px;
  }
  &.--is-size-p{
    height: 24px;
    width: 24px;
    & > .s-icon{
      font-size: 0.9rem !important
    }
  }
  &.--is-size-m{
    height: 40px;
    width: 40px;
  }
  &.--is-size-g{
    height: 64px;
    width: 64px;
  }
  &.--is-color-light{
    background: color(primary, base);
  }
  &.--is-color-dark{
    background: color(neutral, base);
    color: color(primary, base);
  }
}
</style> -->