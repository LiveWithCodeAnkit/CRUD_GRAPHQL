import * as Yup from "yup";

export const projectSchema = Yup.object().shape({
  name: Yup.string().required("Project Name Not be Empty"),
  description: Yup.string().required("Description Not Be Empty"),
  status:Yup.string().required("Select Status"),
  clientId:Yup.string().required()
});
