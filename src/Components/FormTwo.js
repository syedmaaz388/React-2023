import { Button, Container,Divider ,Typography,TextField,Box, Paper } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import {signUpSchema} from '../schemas';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const initialValues = {
    "total_downloads": "",
    "django_users": "",
    "account_completed": "",
    "pan_verified_users": "",
    "kyc_verified_users": "",
    "ucc_verified_users": "",
    "fatca_uploaded_users": "",
    "users_investing": "",
    "total_funds_collected": "",
    "total_funds_sold": "",
    "per_user_avg_investment": ""
    // name:"",
    // email:"",
    // password:"",
    // confirm_password:""
}
function FormTwo() {
    const {values, errors,touched, handleBlur,handleChange,handleSubmit } = useFormik({
        initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action) => {
            console.log(values)
            action.resetForm();
        }
    });
    // console.log(errors);
  return (
<Container>
<Paper elevation={3}  sx={{display:'flex',flexDirection:'column', width:'488px',padding:'20px',margin:'auto'}}>
<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
<Typography gutterBottom variant='h6' sx={{color:'#C9234A'}} >Add Data</Typography>
<CloseOutlinedIcon/>
</Box>
<Divider/>
      <form autoComplete='off' onSubmit={handleSubmit} >
<Typography variant='subtitle2'>Total Downloads</Typography>
<TextField placeholder='Total Downloads' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='total_downloads' type='number' value={values.total_downloads}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.total_downloads && touched.total_downloads ? <Typography sx={{color:'red'}} >{errors.total_downloads}</Typography> : null}
      <Typography variant='subtitle2'>Django User</Typography>
      <TextField placeholder='Django User' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='django_users' type='number' value={values.django_users}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.django_users && touched.django_users ? <Typography sx={{color:'red'}} >{errors.django_users}</Typography> : null}
     <Typography variant='subtitle2'>Account Completed</Typography>
      <TextField placeholder='Account Completed' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='account_completed' type='number' value={values.account_completed}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.account_completed && touched.account_completed ? <Typography sx={{color:'red'}} >{errors.account_completed}</Typography> : null}
 <Typography variant='subtitle2'>PAN Verified Users</Typography>
      <TextField  placeholder='PAN Verified Users' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='pan_verified_users' type='number'  value={values.pan_verified_users}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.pan_verified_users && touched.pan_verified_users ? <Typography sx={{color:'red'}} >{errors.pan_verified_users}</Typography> : null}
 <Typography variant='subtitle2'>KYC Verified Users</Typography>
      <TextField placeholder='KYC Verified Users' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}}  fullWidth  name='kyc_verified_users' type='number'  value={values.kyc_verified_users}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.kyc_verified_users && touched.kyc_verified_users ? <Typography sx={{color:'red'}} >{errors.kyc_verified_users}</Typography> : null}
 <Typography variant='subtitle2'>UCC Verified Users</Typography>
      <TextField  placeholder='UCC Verified Users' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='ucc_verified_users' type='number'  value={values.ucc_verified_users}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.ucc_verified_users && touched.ucc_verified_users ? <Typography sx={{color:'red'}} >{errors.ucc_verified_users}</Typography> : null}
 <Typography variant='subtitle2'>Fatca Uploaded Users</Typography>
      <TextField  placeholder='Fatca Uploaded Users' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='fatca_uploaded_users' type='number'  value={values.fatca_uploaded_users}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.fatca_uploaded_users && touched.fatca_uploaded_users ? <Typography sx={{color:'red'}} >{errors.fatca_uploaded_users}</Typography> : null}
 <Typography variant='subtitle2'>User Investing</Typography>
      <TextField placeholder='User Investing' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='users_investing' type='number' value={values.users_investing}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.users_investing && touched.users_investing ? <Typography sx={{color:'red'}} >{errors.users_investing}</Typography> : null}
 <Typography variant='subtitle2'>Total Funds Collected</Typography>
      <TextField placeholder='Total Funds Collected'  sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='total_funds_collected' type='number' value={values.total_funds_collected}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.total_funds_collected && touched.total_funds_collected ? <Typography sx={{color:'red'}} >{errors.total_funds_collected}</Typography> : null}
 <Typography variant='subtitle2'>Total Funds Sold</Typography>
      <TextField placeholder='Total Funds Sold' fullWidth  sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} name='total_funds_sold' type='number' value={values.total_funds_sold}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.total_funds_sold && touched.total_funds_sold ? <Typography sx={{color:'red'}} >{errors.total_funds_sold}</Typography> : null}
 <Typography variant='subtitle2'>Per User Average Investment</Typography>
      <TextField  placeholder='Per User Average Investment' sx={{marginBottom:'10px',background:'rgba(209, 223, 229, 0.29)'}} fullWidth  name='per_user_avg_investment' type='number'  value={values.per_user_avg_investment}
 onChange={handleChange} onBlur={handleBlur}></TextField>
 {errors.per_user_avg_investment && touched.per_user_avg_investment ? <Typography sx={{color:'red'}} >{errors.per_user_avg_investment}</Typography> : null}
<Button sx={{background:'#C9234A'}} fullWidth type='submit ' variant='contained'>Submit</Button>
</form>
</Paper>

    </Container>
  )
}
export default FormTwo
