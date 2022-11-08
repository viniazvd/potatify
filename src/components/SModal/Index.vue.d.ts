declare const _default: {
    name: string;
    components: {
        SOverlay: {
            name: string;
            props: {
                show: {
                    type: BooleanConstructor;
                };
                transparent: {
                    type: BooleanConstructor;
                };
                dark: {
                    type: BooleanConstructor;
                };
            };
            computed: {
                classes(): any;
            };
        };
        SIcon: import("vue").DefineComponent<{
            icon: {
                type: StringConstructor;
                required: true;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            /**
             * The element to set the property { overflow: hidden } to,
             * by default it targets the body element on the page, but in
             * some cases it is necessary to block the overflow of another
             * parent element.
             */
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            disabled: BooleanConstructor;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                required: true;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            /**
             * The element to set the property { overflow: hidden } to,
             * by default it targets the body element on the page, but in
             * some cases it is necessary to block the overflow of another
             * parent element.
             */
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            disabled: BooleanConstructor;
        }>>, {
            color: string;
            size: string | number;
            disabled: boolean;
        }>;
    };
    props: {
        /**
         * Whether to show or not the modal.
         */
        isOpened: {
            type: BooleanConstructor;
            required: boolean;
        };
        /**
         * The title of the modal (diplayed in the header section by default).
         */
        title: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Disables the modal actions.
         */
        disabled: BooleanConstructor;
        /**
         * Removes the close button.
         */
        noClose: BooleanConstructor;
        /**
         * Removes the header section from the modal.
         */
        noHeader: BooleanConstructor;
        /**
         * Makes the modal fullscreen
         */
        fullscreen: BooleanConstructor;
        /**
         * Whether to show the scroll shadows on top and bottom.
         */
        hasScrollShadow: BooleanConstructor;
        /**
         * Whether to show the background overlay or not.
         */
        noOverlay: BooleanConstructor;
        /**
         * The element to set the property { overflow: hidden } to,
         * by default it targets the body element on the page, but in
         * some cases it is necessary to block the overflow of another
         * parent element.
         */
        scrollEl: StringConstructor;
    };
    data(): {
        showScrollShadow: boolean;
    };
    watch: {
        isOpened(newValue: any, oldValue: any): void;
        scrollEl(newValue: any, oldValue: any): void;
    };
    mounted(): void;
    computed: {
        classes(): any;
    };
    methods: {
        checkOverflow(): void;
        toggleScrollShadow(): void;
        open(): void;
        close(): void;
        emit(): void;
        closeOnEsc(ev: any): void;
        onClickOutside(): void;
    };
    beforeDestroy(): void;
};
export default _default;
