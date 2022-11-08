declare const _default: {
    name: string;
    components: {
        SIcon: import("vue").DefineComponent<{
            icon: {
                type: StringConstructor;
                required: true;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
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
        step: NumberConstructor;
        items: {
            type: ArrayConstructor;
            required: boolean;
        };
    };
    data(): {
        progressiveStep: number;
    };
    watch: {
        step: string;
        progressiveStep: {
            handler: string;
            immediate: boolean;
        };
    };
    methods: {
        incrementStep(): void;
        getClasses(item: {
            label: string;
            icon: string;
            disabled: boolean;
        }, stepIndex: number): any;
    };
};
export default _default;
