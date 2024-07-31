'use client';
import React, { useState } from "react";
import PublicLayout from "@/components/Layout/Public";
import Step1 from "@/components/Auth/Register/Step1";
import Step2 from "@/components/Auth/Register/Step2";
import { RegisterStepType } from "@/types/authentication";

const Register = (): JSX.Element => {
  const [registerStep, setRegisterStep] = useState<RegisterStepType>(RegisterStepType.STEP1);

  const handleNextStep = (): void => {
    if (registerStep === RegisterStepType.STEP1) {
      setRegisterStep(RegisterStepType.STEP2);
    }
  };

  const renderStep  = {
    [RegisterStepType.STEP1]: <Step1 handleNextStep={handleNextStep} />,
    [RegisterStepType.STEP2]: <Step2 />,
  }

  return (
    <PublicLayout>
      {renderStep[registerStep]}
    </PublicLayout>
  );
};

export default Register;
