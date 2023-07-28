import Yup from "yup";

export const validationSchema = Yup.object().shape({
 name: Yup.string().required("Name is required"),
 content: Yup.string().required("Content is required"),
 category: Yup.string().required("Category is required"),
 datesMentioned: Yup.string().required("Dates mentioned is required"),
});
