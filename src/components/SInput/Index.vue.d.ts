declare const _default: {
    name: string;
    components: {
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
        SButton: {
            new (...args: any[]): {
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    link: boolean;
                    color: string;
                    size: string;
                    disabled: boolean;
                    block: boolean;
                    variant: string;
                    loading: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: StringConstructor;
                        default: string;
                    };
                    color: {
                        type: StringConstructor;
                        default: string;
                    };
                    variant: {
                        type: StringConstructor;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    link: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    to: {
                        type: StringConstructor;
                    };
                    loading: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "link" | "color" | "size" | "disabled" | "block" | "variant" | "loading">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: StringConstructor;
                        default: string;
                    };
                    color: {
                        type: StringConstructor;
                        default: string;
                    };
                    variant: {
                        type: StringConstructor;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    link: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    to: {
                        type: StringConstructor;
                    };
                    loading: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    link: boolean;
                    color: string;
                    size: string;
                    disabled: boolean;
                    block: boolean;
                    variant: string;
                    loading: boolean;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: StringConstructor;
                    default: string;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
                variant: {
                    type: StringConstructor;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                link: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                to: {
                    type: StringConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                block: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            variant: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            link: {
                type: BooleanConstructor;
                default: boolean;
            };
            to: {
                type: StringConstructor;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            link: boolean;
            color: string;
            size: string;
            disabled: boolean;
            block: boolean;
            variant: string;
            loading: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default: (_: {}) => any;
            };
        });
    };
    directives: {
        mask(el: any, binding: any): any;
    };
    props: {
        small: BooleanConstructor;
        larger: BooleanConstructor;
        icon: StringConstructor;
        disabled: BooleanConstructor;
        rightIcon: StringConstructor;
        button: StringConstructor;
        buttonIcon: StringConstructor;
        round: BooleanConstructor;
        textArea: BooleanConstructor;
        placeholder: StringConstructor;
        value: StringConstructor;
        isMoney: BooleanConstructor;
        floatLabel: BooleanConstructor;
        moneyMask: {
            type: ObjectConstructor;
            default: () => {
                prefix: string;
                decimal: string;
                thousands: string;
            };
        };
        mask: {
            type: (ArrayConstructor | StringConstructor)[];
            default: string;
        };
        raw: BooleanConstructor;
    };
    computed: {
        inputClasses(): any;
        componentType(): "input" | "textarea";
        listeners(): any;
        inputAttrs(): any;
    };
};
export default _default;
