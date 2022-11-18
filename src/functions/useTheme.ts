import { useDark, useToggle  } from "@vueuse/core"

export function useTheme () {
  const isDark = useDark()
  const toggleDarkMode = useToggle(isDark)

  return {
    isDark,
    toggleDark: () => {
      /** Note: be aware that the toggle function accepts the 
       * first argument as the override value. You might want to avoid 
       * directly passing the function to events in the template, 
       * as the event object will pass in.
       * 
       * #more info: https://vueuse.org/shared/useToggle/
      */
      toggleDarkMode()
    }
  }
}