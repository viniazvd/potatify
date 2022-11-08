declare const _default: {
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
        SCollapsible: {
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
        SInputContainer: {
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
    };
    directives: any;
    props: {
        larger: BooleanConstructor;
        small: BooleanConstructor;
        value: (ArrayConstructor | ObjectConstructor)[];
        items: {
            type: ArrayConstructor;
            required: boolean;
        };
        tabindex: {
            type: NumberConstructor;
            default: number;
        };
        trackBy: {
            type: StringConstructor;
            required: boolean;
        };
        displayBy: {
            type: StringConstructor;
            required: boolean;
        };
        multiple: BooleanConstructor;
        disabled: BooleanConstructor;
        placeholder: StringConstructor;
        hideSelected: BooleanConstructor;
        optionSelectPlaceholder: StringConstructor;
        optionUnselectPlaceholder: StringConstructor;
        clearOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        pointer: number;
        searchQuery: string;
        isOpened: boolean;
        contentHeight: null;
    };
    computed: {
        error(): "" | "You need to set trackBy." | "Value must be a array" | "You need to set displayBy.";
        containerClasses(): any;
        values(): any;
        options(): any;
        selected: {
            get(): any;
            set({ option, index }: {
                option: object;
                index: number;
            }): any;
        };
    };
    methods: {
        itemClasses(option: object, index: number): any[];
        openingHandler(): void;
        escHandler(): void;
        getPayloadType(option: object): any;
        emit(payload: any): void;
        removeSelected(index: any): void;
        isEqual(v1: any, v2: any): any;
        isSelected(option: any): any;
        outside(): void;
        setFocus(): void;
        unsetFocus(): void;
        onSearch({ target: { value } }: {
            target: {
                value: any;
            };
        }): void;
        pointerReset(): void;
        pointerSet(option: any): void;
        pointerForward(): void;
        pointerBackward(): void;
        addPointerElement({ key }?: string): void;
    };
};
export default _default;
