import { useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
const options = [
    { value: 'cairo', label: 'cairo' },
    { value: 'zagazig', label: 'zagazig' },
    { value: 'mansourah', label: 'mansourah' },
];

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValue: {
            email: '',
            username: '',
            password: ''
        }
    });

    let [selectedOption, setSelectedOption] = useState();

    selectedOption.forEach(da =>{
       console.log(da.value)
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
            <form action='./home' autoComplete= 'false' className="form w-50" onSubmit={handleSubmit(data=>console.log(data))}>
                <div className="form-group my-3">
                    <label className="form-lable" htmlFor="email">Email</label>
                    <input className="form-control" type="text" id="email"
                        {...register("email",
                            {
                                required: 'this field is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })} />
                    {
                        errors && errors.email ?
                            <p className='alert alert-danger'>{errors.email?.message}</p>
                            : <p></p>
                    }
                </div>
                <div className="form-group my-3">
                    <label className="form-lable" htmlFor="username">User Name</label>
                    <input className="form-control" type="text" id="username"
                        {...register("username",
                            {
                                required: 'user name is required' ,
                                minLength: { value: 5, message: 'min length is 5 char' }
                            })} />
                    {
                        errors && errors.username?
                            <p className='alert alert-danger'>{errors.username?.message}</p>
                            : <p></p>
                    }
                </div>
                <div className="form-group my-3">
                    <label className="form-lable" htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password"
                        {...register("password",
                            { required: "password is required" , minLength: {value:5, message:"length must be 5 char"} })} />
                    {
                        errors && errors.password?
                            <p className='alert alert-danger'>{errors.password?.message}</p>
                            : <p></p>
                    }
                </div>
                <div className="form-group my-3">
                    <label className="form-lable" htmlFor="gender">Gender</label>
                    <select className="form-control" name="gender" id="gender" {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group my-3">
                    <label className="form-lable" htmlFor="university">University</label>
                    <Select
                        name='university'
                        {...register("university.value")}
                        isMulti
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}

                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <input className="btn btn-outline-success mx-5 my-3" type="submit" value="Submit" />
                    <input className="btn btn-outline-secondary mx-5 my-3" type="reset" value="Reset" />
                </div>
            </form>
            </div>
        </div>
    );
}