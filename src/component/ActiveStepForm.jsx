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
                        <div className=" mb-3 w-full">
                            <label className="text-sm">
                                <span className="text-xs">Your Last Name</span>
                            </label>
                            <input
                                {...register('displayName', {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    }
                                })}
                                type="text" placeholder="Your First Name"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.displayName?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full">
                            <input
                                {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: 'Last Name is required'
                                    }
                                })}
                                type="text" placeholder="Your Last Name"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

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
                        <div className=" mb-3 w-full">
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
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full ">
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
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full ">
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
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

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
                        <div className=" mb-3 w-full">
                            <input
                                {...register('address', {
                                    required: {
                                        value: true,
                                        message: 'address is required'
                                    }
                                })}
                                type="text" placeholder="Your Address"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full">
                            <input
                                {...register('country', {
                                    required: {
                                        value: true,
                                        message: 'country is required'
                                    }
                                })}
                                type="text" placeholder="Your country"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

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
                        <div className=" mb-3 w-full">
                            <input
                                {...register('cardNumber', {
                                    required: {
                                        value: true,
                                        message: 'Card Number is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Number"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.cardNumber?.type === 'required' && <span className="label-text-alt text-error">{errors.cardNumber.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full">
                            <input
                                {...register('cardMonth', {
                                    required: {
                                        value: true,
                                        message: 'Card Month is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Month"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.cardMonth?.type === 'required' && <span className="label-text-alt text-error">{errors.cardMonth.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full">
                            <input
                                {...register('cardYear', {
                                    required: {
                                        value: true,
                                        message: 'Card Year is required'
                                    }
                                })}
                                type="text" placeholder="Enter Your Card Your"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

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

        <form className='py-6' onSubmit={handleSubmit(onSubmit)}>
            {getStepContent(activeStep)}
        </form>
    );
};

export default ActiveStepForm;