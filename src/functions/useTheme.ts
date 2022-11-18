import { useDark, useToggle  } from "@vueuse/core"

export function useTheme () {
  return {
    isDark: useDark,
    toggleDarkMode: function () { 
      useToggle(this.isDark)
    }
  }
}