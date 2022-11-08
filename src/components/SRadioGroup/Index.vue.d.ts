declare const _default: {
    name: string;
    model: {
        prop: string;
        event: string;
    };
    props: {
        value: StringConstructor;
        options: {
            type: ArrayConstructor;
            required: boolean;
        };
        row: BooleanConstructor;
        label: StringConstructor;
    };
    computed: {
        classes(): any;
    };
    methods: {
        getClasses({ disabled, negative }: {
            disabled: boolean;
            negative: boolean;
        }): (string | {
            '--is-negative': boolean;
            '--is-disabled': boolean;
        })[];
        emit(value: string): void;
    };
};
export default _default;
