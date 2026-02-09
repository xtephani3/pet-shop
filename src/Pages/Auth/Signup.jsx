import { NavLink, useNavigate } from "react-router-dom"
import { LoginInput } from "../../Components/Input/LoginInput"
import { Button } from "../../Components/Button/Button"
import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import { dexie } from "../../config/dexie";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'must contain at least 2 characters!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'must contain at least 2 characters!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'password must be 8 characters long!')
        .max(50, 'passsword must not exceed 50 characters!')
        .required('Required')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),

});


export function SignUp() {
    const navigate = useNavigate()
    const onSignUp = async (firstName, lastName, userName, email, password) => {
        const userCheck = await checkUser(userName, email)
        if (userCheck) {
            await dexie.users.add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                userName: userName,
                password: password
            })
            navigate("/Login", { replace: true })
        };

    };
    async function checkUser(userName, email) {
        const userNameExist = Boolean(await dexie.users.where("userName").equals(userName).first())
        const userEmailExist = Boolean(await dexie.users.where("email").equals(email).first())
        if (userNameExist) {
            alert("user already exists")
            return false;
        }
        if (userEmailExist) {
            alert("user with email already exists")
            return false;
        }
        return true;
    }
    return (
        <div className="flex flex-col justify-center items-center w-[648px] mx-auto mt-[100px]">
            <div className="mb-[30px] w-[100%] flex flex-col items-center">
                <p className="text-center bg-[var(--color-secondary)] w-[132.92px] h-[50px] flex items-center justify-center text-white"><span>Sign up</span></p>
                <div className="border-b-[1px] border-solid border-gray-300 w-[100%]"></div>
            </div>
            <Formik initialValues={{ email: "", firstName: "", lastName: "", userName: "", password: "" }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onSignUp(values.firstName, values.lastName, values.userName, values.email, values.password)
                    setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col justify-center items-center gap-[10px] px-[41px] py-[36px] bg-white shadow-2xl shadow-[#ccc] ">
                        <div className="w-[566px] flex gap-[5px]">
                            <div className="flex flex-col">
                                <Field name="firstName" size="sm" as={LoginInput} placeholder="First Name" />
                                {errors.firstName && touched.firstName ? (
                                    <div className="text-red-500">{errors.firstName}</div>
                                ) : null}
                            </div>
                            <div className="flex flex-col">
                                <Field name="lastName" size="sm" as={LoginInput} placeholder="Last Name" />
                                {errors.lastName && touched.lastName ? (
                                    <div className="text-red-500">{errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>
                        <Field name="email" size="md" as={LoginInput} placeholder="Email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="userName" size="md" as={LoginInput} placeholder="User Name" />
                        {errors.userName && touched.userName ? (
                            <div className="text-red-500">{errors.lastName}</div>
                        ) : null}
                        <Field name="password" size="md" as={LoginInput} placeholder="password" type="password" />
                        {errors.password && touched.password ? (
                            <div className="text-red-500">{errors.password}</div>
                        ) : null}
                        <Button variant="secondary" size="xl" background="tertColor" color="whiteColor" >Sign up</Button>

                        <p >already have an account?
                            <span className="text-[var(--color-secondary)]"> <NavLink to='/login'>Login</NavLink></span>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


