import * as Yup from "yup";

export const signUpSchema = Yup.object({


  total_downloads: Yup.number().positive().integer().required("Required"),
  django_users: Yup.number().positive().integer().required("Required"),
  account_completed: Yup.number().positive().integer().required("Required"),
  pan_verified_users:Yup.number().positive().integer().required("Required"),
  kyc_verified_users: Yup.number().positive().integer().required("Required"),
  ucc_verified_users: Yup.number().positive().integer().required("Required"),
  fatca_uploaded_users: Yup.number().positive().integer().required("Required"),
  users_investing: Yup.number().positive().integer().required("Required"),
  total_funds_collected: Yup.number().positive().integer().required("Required"),
  total_funds_sold: Yup.number().positive().integer().required("Required"),
  per_user_avg_investment: Yup.number().positive().integer().required("Required"),
   // name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
   // email:Yup.string().email().required('Please Enter Your Email'),
   // password:Yup.string().min(6).required("Please Enter Your Password"),
   // confirm_password:Yup.string()
   // .required()
   // .oneOf([Yup.ref('password'),null],"Password Must Match")

})