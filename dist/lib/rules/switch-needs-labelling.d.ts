import { TSESTree } from "@typescript-eslint/utils";
declare const rule: import("@typescript-eslint/utils/dist/ts-eslint").RuleModule<"noUnlabelledSwitch", [], {
    JSXOpeningElement(node: TSESTree.JSXOpeningElement): void;
}>;
export default rule;
