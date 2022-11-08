/**
 * Overlay component, used to give focus to a fixed element that appears
 * on the screen.
 */
declare const _default: {
    name: string;
    props: {
        /**
         * Whether to show or not the overlay
         */
        show: {
            type: BooleanConstructor;
        };
        /**
         * Makes the overlay completely transparent.
         */
        transparent: {
            type: BooleanConstructor;
        };
        /**
         * Makes the background slightly darker.
         */
        dark: {
            type: BooleanConstructor;
        };
    };
    computed: {
        classes(): any;
    };
};
export default _default;
