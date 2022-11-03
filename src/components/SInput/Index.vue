<template>
  <s-input-container v-bind="$attrs" :class="inputClasses">
    <s-icon v-if="icon" :icon="icon" class="left-icon" />

    <!-- value.prop motivation: https://github.com/vuejs/vue/issues/7393 -->
    <component
      :is="componentType"

      class="input"
      autocomplete="new-password"

      v-mask="mask"
      v-on="listeners"
      v-bind="inputAttrs"
      v-html="textArea && value"

      :value.prop="value"
    />

    <s-icon v-if="rightIcon" :icon="rightIcon" class="right-icon" />

    <!-- @click="onClick" -->
    <s-button
      v-if="button"

      :icon="buttonIcon"

      v-bind="$attrs"

      >
      {{ button }}
    </s-button>
  </s-input-container>
</template>

<script lang="ts">
import { mask } from 'vue-the-mask'
// import { Money3Component } from 'v-money3'

import SInputContainer from '../SInputContainer/Index.vue'
import SIcon from '../SIcon/Index.vue'
import SButton from '../SButton/Index.vue'

const convertToRaw = (data: string) => data
  .replace(/[^\w\s]/gi, '')
  .replace(/\s/g, '')

export default {
  name: 'SInput',

  components: {
    // money3: Money3Component,
    SInputContainer,
    SIcon,
    SButton,
    // SIcon: () => import('../SIcon/Index.vue').then(d => d.default),
    // SButton: () => import('../SButton/Index.vue') //.then(d => d.default)
  },

  directives: {
    mask (el, binding) {
      if (!binding?.value || !binding?.value?.length) { return }

      return mask(el, binding)
    }
  },

  props: {
    small: Boolean,

    larger: Boolean,

    icon: String,

    disabled: Boolean,

    rightIcon: String,

    button: String,

    buttonIcon: String,

    round: Boolean,

    textArea: Boolean,

    placeholder: String,

    value: String, //[String, Number, Object],

    isMoney: Boolean,

    floatLabel: Boolean,

    moneyMask: {
      type: Object,
      default: () => ({
        prefix: 'R$ ',
        decimal: ',',
        thousands: '.'
      })
    },

    mask: {
      type: [String, Array],
      default: ''
    },

    raw: Boolean,

    // onClick: Function
  },

  computed: {
    inputClasses () {
      return [
        's-input', {
          '--small': this.small,
          '--larger': this.larger,
          '--has-icon': this.icon,
          '--has-button': this.button,
          '--is-money': this.isMoney,
          '--is-rounded': this.round,
          '--is-not-empty': !!this.value,
          '--is-textarea': this.textArea,
          '--is-disabled': this.disabled,
          '--has-right-icon': this.rightIcon,
          '--is-float-label': this.floatLabel,
        }
      ]
    },

    componentType () {
      // if (this.isMoney) return 'money3'
      if (this.textArea) return 'textarea'

      return 'input'
    },

    listeners () {
      const emitInput = (ev: InputEvent) => {
        const targetValue = (ev.target as HTMLInputElement)?.value
        const inputValue = typeof targetValue === 'string' ? targetValue : ev

        const value = this.isMoney
          ? ev
          : this.raw ? convertToRaw(inputValue) : inputValue

        if (value !== this.value) this.$emit('input', value)
      }

      return { ...this.$attrs, input: emitInput, update: emitInput }
    },

    inputAttrs () {
      return {
        ...this.$attrs,
        ...(this.isMoney ? this.moneyMask : {}),

        value: this.value,
        disabled: this.disabled,
        placeholder: this.floatLabel ? '' : this.placeholder
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

$icon-position: 8px;

.s-input {
  display: flex;
  flex-direction: column;

  & > .input {
    outline: 0;
    width: 100%;
    height: 36px;
    font-size: 14px;
    text-indent: 20px;

    border-width: 1px;
    border-style: solid;
    border-image-slice: 1;
    border-radius: $border-radius-md;
    border-image-source: color(base, light);

    transition: color .3s, border-color .3s;

    &::placeholder { color: color(base, light); }
    &::-webkit-input-placeholder { color: color(base, light); }

    &.--has-icon { text-indent: 35px; }
  }

  & > .label {
    display: block;
    width: 100%;
    margin-bottom: 8px;

    pointer-events: none;
    color: color(base, base);
    font-size: $font-size-xs;
    font-family: $font-family;
    font-weight: $font-weight-regular;
    transition: font-size .3s, transform .3s;
  }

  &.--is-textarea > .input {
    height: unset;
    padding: 10px;
    text-indent: 0;
  }

  &.--small > .input { height: 28px; }

  &.--larger > .input { height: 52px; }

  &.--is-rounded > .input { border-radius: 50px; }

  &.--has-button {
    flex-direction: row;
    flex-wrap: wrap;

    & > .input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 1%;
      -webkit-box-flex: 1;
      flex: 1 1 auto;
    }

    & > .s-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.--has-icon > .input { padding-left: 25px; }
  &.--has-right-icon > .input { padding-right: 40px; }

  & > .left-icon, & > .right-icon {
    top: 50%;
    position: absolute;
    padding-right: 5px;
    padding-left: 5px;
    box-sizing: content-box;
    // transform: translateY(-50%);
  }

  & > .right-icon { right: $icon-position; }
  & > .left-icon { left: $icon-position; }

  &.--is-float-label {
    & > label {
      top: -20px;

      padding: 0 20px;
      transform: translateY(35px);
    }

    & > .input { padding-top: 20px; }

    &:focus-within > .label,
    &.--is-money > .label,
    &.--is-not-empty > .label {
      font-size: 11px;
      transform: translateY(30px);
    }
  }

  &.--is-disabled {
    cursor: default;
    & > .input {
      border-color: color(neutral, dark);
      background-color: color(neutral, light);
    }
  }

  &:focus-within {
    & > .input { border-color: color(primary, base); }
    & > .s-icon {color: color(primary, base);}
  }
}
</style>