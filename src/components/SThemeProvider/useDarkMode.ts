import {useToggle} from "@vueuse/core";

export function useDarkMode (initialValue: boolean = false) {
  const [isDark, setDarkTheme] = useToggle(initialValue);

  return {
    isDark,
    setDarkTheme,
    toggleDarkTheme: function () {
      setDarkTheme(!isDark.value)
    }
  }
}