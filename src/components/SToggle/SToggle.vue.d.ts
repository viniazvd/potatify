import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: null;
    label: {
        required: true;
        type: StringConstructor;
    };
    size: {
        type: PropType<"md" | "lg">;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: null;
    label: {
        required: true;
        type: StringConstructor;
    };
    size: {
        type: PropType<"md" | "lg">;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
    size: "md" | "lg";
}>;
export default _default;
