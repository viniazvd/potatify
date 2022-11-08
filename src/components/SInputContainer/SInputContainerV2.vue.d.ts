import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            persistentHint: boolean;
            rules: Function[];
            eager: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            label: {
                required: true;
                type: StringConstructor;
            };
            modelValue: {
                type: null;
            };
            appendInnerIcon: StringConstructor;
            appendOuterIcon: StringConstructor;
            prependInnerIcon: StringConstructor;
            prependOuterIcon: StringConstructor;
            hint: StringConstructor;
            error: BooleanConstructor;
            persistentHint: BooleanConstructor;
            rules: {
                type: PropType<Function[]>;
                default: never[];
            };
            eager: BooleanConstructor;
        }>> & {
            "onClick:append-outer"?: ((...args: any[]) => any) | undefined;
            "onClick:append-inner"?: ((...args: any[]) => any) | undefined;
            "onClick:prepend-inner"?: ((...args: any[]) => any) | undefined;
            "onClick:prepend-outer"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "persistentHint" | "rules" | "eager">;
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
        $emit: (event: "click:append-outer" | "click:append-inner" | "click:prepend-inner" | "click:prepend-outer", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            label: {
                required: true;
                type: StringConstructor;
            };
            modelValue: {
                type: null;
            };
            appendInnerIcon: StringConstructor;
            appendOuterIcon: StringConstructor;
            prependInnerIcon: StringConstructor;
            prependOuterIcon: StringConstructor;
            hint: StringConstructor;
            error: BooleanConstructor;
            persistentHint: BooleanConstructor;
            rules: {
                type: PropType<Function[]>;
                default: never[];
            };
            eager: BooleanConstructor;
        }>> & {
            "onClick:append-outer"?: ((...args: any[]) => any) | undefined;
            "onClick:append-inner"?: ((...args: any[]) => any) | undefined;
            "onClick:prepend-inner"?: ((...args: any[]) => any) | undefined;
            "onClick:prepend-outer"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:append-outer" | "click:append-inner" | "click:prepend-inner" | "click:prepend-outer")[], string, {
            error: boolean;
            persistentHint: boolean;
            rules: Function[];
            eager: boolean;
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
        label: {
            required: true;
            type: StringConstructor;
        };
        modelValue: {
            type: null;
        };
        appendInnerIcon: StringConstructor;
        appendOuterIcon: StringConstructor;
        prependInnerIcon: StringConstructor;
        prependOuterIcon: StringConstructor;
        hint: StringConstructor;
        error: BooleanConstructor;
        persistentHint: BooleanConstructor;
        rules: {
            type: PropType<Function[]>;
            default: never[];
        };
        eager: BooleanConstructor;
    }>> & {
        "onClick:append-outer"?: ((...args: any[]) => any) | undefined;
        "onClick:append-inner"?: ((...args: any[]) => any) | undefined;
        "onClick:prepend-inner"?: ((...args: any[]) => any) | undefined;
        "onClick:prepend-outer"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    label: {
        required: true;
        type: StringConstructor;
    };
    modelValue: {
        type: null;
    };
    appendInnerIcon: StringConstructor;
    appendOuterIcon: StringConstructor;
    prependInnerIcon: StringConstructor;
    prependOuterIcon: StringConstructor;
    hint: StringConstructor;
    error: BooleanConstructor;
    persistentHint: BooleanConstructor;
    rules: {
        type: PropType<Function[]>;
        default: never[];
    };
    eager: BooleanConstructor;
}>> & {
    "onClick:append-outer"?: ((...args: any[]) => any) | undefined;
    "onClick:append-inner"?: ((...args: any[]) => any) | undefined;
    "onClick:prepend-inner"?: ((...args: any[]) => any) | undefined;
    "onClick:prepend-outer"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:append-outer" | "click:append-inner" | "click:prepend-inner" | "click:prepend-outer")[], "click:append-outer" | "click:append-inner" | "click:prepend-inner" | "click:prepend-outer", {
    error: boolean;
    persistentHint: boolean;
    rules: Function[];
    eager: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        label: (_: {
            label: string;
        }) => any;
        'prepend:outer': (_: {}) => any;
        'prepend:inner': (_: {}) => any;
        value: (_: {
            value: any;
        }) => any;
        'append-inner': (_: {}) => any;
        'append:outer': (_: {}) => any;
    };
});
export default _default;
