import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button/Button"
import { LoginInput } from "../../Components/Input/LoginInput"
import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import { dexie } from "../../config/dexie";


const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'must contain at least 2 characters!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'password must be 8 characters long!')
        .max(50, 'passsword must not exceed 50 characters!')
        .required('Required')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),

});



export function Login() {
    const navigate = useNavigate()
    async function validateUser(userName, password) {
        const userNameExist = await dexie.users.where("userName").equals(userName).first()
        const userPasswordMatch = userNameExist?.password === password
        if(!userNameExist){
            alert("username does not exist")
        }
        if (userPasswordMatch) {
            navigate("/", { replace: true })
        }
        else{
            alert("incorrect password")
        }

        return true;
    }
    return (
        <div className="flex flex-col justify-center items-center w-[648px] mx-auto mt-[150px]">
            <div className="mb-[30px] w-[100%] flex flex-col items-center">
                <p className="text-center bg-[var(--color-secondary)] w-[132.92px] h-[50px] flex items-center justify-center text-white"><span>Log in</span></p>
                <div className="border-b-[1px] border-solid border-gray-300 w-[100%]"></div>
            </div>

            <Formik initialValues={{ userName: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    validateUser(values.userName, values.password)
                    setSubmitting(false);
                }}>
                {({ errors, touched }) => (
                    <Form className="flex flex-col justify-center items-center gap-[10px] px-[41px] py-[36px] bg-white shadow-2xl shadow-[#ccc] ">
                        < Field name="userName" size="md" as={LoginInput} placeholder="username" required={true} />
                        {errors.userName && touched.userName ? (
                            <div className="text-red-500">{errors.userName}</div>
                        ) : null}
                        <Field name="password" size="md" as={LoginInput} placeholder="password" type="password" required={true} />
                        {errors.password && touched.password ? (
                            <div className="text-red-500">{errors.password}</div>
                        ) : null}
                        <Button variant="secondary" size="xl" background="tertColor" color="whiteColor">Login</Button>
                        <p className="text-[var(--color-secondary)]">forgot your password?</p>
                        <p >Don't have an account?
                            <span className="text-[var(--color-secondary)]"> <NavLink to='/signUp'>Sign up</NavLink></span>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}