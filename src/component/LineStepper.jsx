import React, { useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import ActiveStepForm from './ActiveStepForm';

const LineStepper = () => {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Payment",
    ];
    const handleBack =()=>{
        setActiveStep(activeStep - 1)
    }
    const handleNext =()=>{
        setActiveStep(activeStep + 1)
    }
    return (
        <div className='container mx-auto'>
            <div className='w-3/4 mx-auto border p-20 mt-10'>
                <MultiStepForm activeStep={activeStep}>
                    {
                        steps.map((step, index) => <Step key={index} label={step}>

                        </Step>)
                    }
                </MultiStepForm>
                <ActiveStepForm activeStep={activeStep}/>
                <div className='flex justify-center'>
                    <button onClick={handleBack} className='text-lg border bg-green-500 text-white py-2 px-6 rounded-lg mr-3'>Back</button>
                    <button onClick={handleNext} className='text-lg border bg-green-500 text-white py-2 px-6 rounded-lg mr-3'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default LineStepper;