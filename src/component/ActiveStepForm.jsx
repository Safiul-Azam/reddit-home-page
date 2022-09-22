import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ActiveStepForm = ({ activeStep }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    function getStepContent(step) {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your First Name</span>
                            </label>
                            <input
                                {...register('displayName', {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    }
                                })}
                                type="text" placeholder="Your First Name"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.displayName?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Last Name</span>
                            </label>
                            <input
                                {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: 'Last Name is required'
                                    }
                                })}
                                type="text" placeholder="Your Last Name"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.lastName?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                    </>

                );

            case 2:
                return (
                    <>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                type="email" placeholder="Enter Your Email"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'The password must be at least 6 characters long'
                                    }
                                })}
                                type="password" placeholder="Enter Your Password"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'The password must be at least 6 characters long'
                                    }
                                })}
                                type="password" placeholder="Enter Your Password"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input
                                {...register('address', {
                                    required: {
                                        value: true,
                                        message: 'address is required'
                                    }
                                })}
                                type="text" placeholder="Your Address"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your country</span>
                            </label>
                            <input
                                {...register('country', {
                                    required: {
                                        value: true,
                                        message: 'country is required'
                                    }
                                })}
                                type="text" placeholder="Your country"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.country?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>

                    </>
                );
            case 4:
                return (
                    <>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your cardNumber</span>
                            </label>
                            <input
                                {...register('cardNumber', {
                                    required: {
                                        value: true,
                                        message: 'Card Number is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Number"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.cardNumber?.type === 'required' && <span className="label-text-alt text-error">{errors.cardNumber.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your cardMonth</span>
                            </label>
                            <input
                                {...register('cardMonth', {
                                    required: {
                                        value: true,
                                        message: 'Card Month is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Month"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.cardMonth?.type === 'required' && <span className="label-text-alt text-error">{errors.cardMonth.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your cardYear</span>
                            </label>
                            <input
                                {...register('cardYear', {
                                    required: {
                                        value: true,
                                        message: 'Card Year is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Your"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                            <label className="label">
                                {errors.cardYear?.type === 'required' && <span className="label-text-alt text-error">{errors.cardYear.message}</span>}
                            </label>
                        </div>
                    </>
                );
            default:
                return "unknown step";
        }
    }


    return (
        <div>

            <form className='' onSubmit={handleSubmit(onSubmit)}>
                {getStepContent(activeStep)}
            </form>
        </div>
    );
};

export default ActiveStepForm;