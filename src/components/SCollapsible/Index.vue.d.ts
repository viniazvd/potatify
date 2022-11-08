declare const _default: {
    name: string;
    props: {
        height: NumberConstructor;
        noHeader: BooleanConstructor;
        outsideClosable: BooleanConstructor;
        isOpened: {
            type: BooleanConstructor;
            required: boolean;
        };
    };
    data: () => {
        observer: {
            observe: Function;
            disconnect: Function;
        } | null;
        contentHeight: number;
    };
    mounted(): void;
    computed: {
        randomRef(): string;
    };
    methods: {
        contains(event: {
            target: HTMLInputElement;
        }): any;
        clickOutside(event: {
            target: HTMLInputElement;
        }): void;
    };
    beforeDestroy(): void;
};
export default _default;
