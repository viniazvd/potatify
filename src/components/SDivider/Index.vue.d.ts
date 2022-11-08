import { PropType } from "vue";
import { ValueOf } from "@/@types";
declare const _default: import("vue").DefineComponent<{
    orientation: {
        type: PropType<ValueOf<{
            readonly VERTICAL: "vertical";
            readonly HORIZONTAL: "horizontal";
        }>>;
        default: string;
    };
    inset: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    orientation: {
        type: PropType<ValueOf<{
            readonly VERTICAL: "vertical";
            readonly HORIZONTAL: "horizontal";
        }>>;
        default: string;
    };
    inset: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    inset: boolean;
    orientation: ValueOf<{
        readonly VERTICAL: "vertical";
        readonly HORIZONTAL: "horizontal";
    }>;
}>;
export default _default;
