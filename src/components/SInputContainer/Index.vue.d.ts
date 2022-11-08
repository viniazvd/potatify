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
        label: StringConstructor;
        leftIcon: StringConstructor;
        rightIcon: StringConstructor;
        validation: (ArrayConstructor | StringConstructor)[];
        required: BooleanConstructor;
    };
    computed: {
        classes(): any;
        hasValidation(): boolean;
        validationMessage(): any;
    };
};
export default _default;
