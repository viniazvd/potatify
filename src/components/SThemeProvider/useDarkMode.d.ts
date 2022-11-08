export declare function useDarkMode(initialValue?: boolean): {
    isDark: import("vue").Ref<boolean>;
    setDarkTheme: (value?: boolean | undefined) => boolean;
    toggleDarkTheme: () => void;
};
