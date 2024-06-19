import { formValidators } from "../../../validators/formValidators";

export const petRoomEditInputs = [
    {
        tag: "Name",
        name: "name",
        type: "text",
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
    {
        tag: "Pet type",
        name: "petType",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
        tag: "Clinic",
        name: "clinic",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
    {
        tag: "Size",
        name: "size",
        type: "text",
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
];