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
    };
    props: {
        noOverlay: BooleanConstructor;
        direction: {
            type: StringConstructor;
            default: string;
            validator: (direction: string) => boolean;
        };
        isOpened: {
            type: BooleanConstructor;
            required: boolean;
        };
        width: {
            type: StringConstructor[];
            default: string;
        };
    };
    computed: {
        classes(): any;
    };
};
export default _default;
