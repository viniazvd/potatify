import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: string | number;
            inline: boolean;
            variant: "circle" | "square" | "rounded";
            left: boolean;
            dot: boolean;
            noOverlap: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            value: StringConstructor;
            variant: {
                type: PropType<"circle" | "square" | "rounded">;
                default: string;
            };
            noOverlap: BooleanConstructor;
            icon: StringConstructor;
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            left: BooleanConstructor;
            dot: BooleanConstructor;
            inline: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "inline" | "variant" | "left" | "dot" | "noOverlap">;
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
            value: StringConstructor;
            variant: {
                type: PropType<"circle" | "square" | "rounded">;
                default: string;
            };
            noOverlap: BooleanConstructor;
            icon: StringConstructor;
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            left: BooleanConstructor;
            dot: BooleanConstructor;
            inline: BooleanConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: string | number;
            inline: boolean;
            variant: "circle" | "square" | "rounded";
            left: boolean;
            dot: boolean;
            noOverlap: boolean;
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
        value: StringConstructor;
        variant: {
            type: PropType<"circle" | "square" | "rounded">;
            default: string;
        };
        noOverlap: BooleanConstructor;
        icon: StringConstructor;
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        left: BooleanConstructor;
        dot: BooleanConstructor;
        inline: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    value: StringConstructor;
    variant: {
        type: PropType<"circle" | "square" | "rounded">;
        default: string;
    };
    noOverlap: BooleanConstructor;
    icon: StringConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    left: BooleanConstructor;
    dot: BooleanConstructor;
    inline: BooleanConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string | number;
    inline: boolean;
    variant: "circle" | "square" | "rounded";
    left: boolean;
    dot: boolean;
    noOverlap: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        value: (_: {
            value: string | undefined;
        }) => any;
        default: (_: {}) => any;
    };
});
export default _default;
