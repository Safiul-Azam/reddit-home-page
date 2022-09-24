import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowLeft } from 'react-icons/hi';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2';

const LineStepper = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [swalProps, setSwalProps] = useState({})

    const steps = [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Payment",
    ];
    const handleBack = (e) => {
        e.preventDefault()
        setActiveStep(activeStep - 1)
        console.log(activeStep);
        
    }

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleNext = (data) => {
        setActiveStep(activeStep + 1)
        console.log(activeStep);
        console.log(data);
        activeStep === steps.length && setSwalProps({
            show: true,
            title: 'Thank You',
            text: 'For Your Payment For This Product',
        })
    };
    function getStepContent(step) {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className=" mb-3 w-full">
                            <label className="text-sm">
                                <span className="text-xs">Your First Name</span>
                            </label>
                            <input
                                {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    }
                                })}
                                name='firstName'
                                type="text" placeholder="Your First Name"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"
                            />
                            <label className="label">
                                {errors?.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.firstName?.message}</span>}
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
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
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
                                {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className=" mb-3 w-full ">
                            <input
                                {...register('phoneNumber', {
                                    required: {
                                        value: true,
                                        message: 'phoneNumber is required'
                                    }
                                })}
                                type="number" placeholder="Enter Your Phone Number"
                                className="text-sm text-gray-600 focus:outline-none rounded-sm border border-gray-200 focus:border-teal-400 p-2 focus:text-gray-600 w-full"

                            />
                            <label className="label">
                                {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
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
                                {errors.cardNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cardNumber.message}</span>}
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
                                {errors.cardMonth?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cardMonth.message}</span>}
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
                                {errors.cardYear?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cardYear.message}</span>}
                            </label>
                        </div>
                    </>
                );
            default:
                return "unknown step";
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='w-3/4 mx-auto border p-20'>
                <MultiStepForm activeStep={activeStep}>
                    {
                        steps.map((step, index) => <Step key={index} label={step}>
                        </Step>)
                    }
                </MultiStepForm>

                <>
                    {activeStep === steps.length + 1 ? <>
                        <SweetAlert2 {...swalProps} />
                       <p className='text-center text-amber-500 text-xl flex justify-center items-center'><HiArrowLeft/><Link className='' to='/'> Home</Link></p>
                    </> : <form className='py-6 text-center'>
                        {getStepContent(activeStep)}
                        <button disabled={activeStep === 1} onClick={handleBack} className='text-lg border bg-green-500 text-white py-2 px-6 rounded-lg mr-3'>Back</button>
                        <button disabled={activeStep === steps.length + 2} onClick={handleSubmit(handleNext)} type='submit' className='text-lg border bg-green-500 text-white py-2 px-6 rounded-lg mr-3'>{activeStep === steps.length ? 'Confirm Payment' : 'Next'}</button>
                    </form>}
                </>
            </div>
        </div >
    );
};

export default LineStepper;