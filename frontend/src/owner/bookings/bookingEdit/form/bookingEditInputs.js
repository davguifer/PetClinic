import { formValidators } from "../../../../validators/formValidators";
import moment from 'moment';

export const bookingEditInputs = [
    {
        tag: "Start Date",
        name: "startDate",
        type: "date",
        defaultValue: moment().format('YYYY-MM-DD'),
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
    {
        tag: "End Date",
        name: "endDate",
        type: "date",
        defaultValue: moment().format('YYYY-MM-DD'),
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
    {
        tag: "Pet",
        name: "pet",
        type: "select",
        values: ["None"],
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    }
];