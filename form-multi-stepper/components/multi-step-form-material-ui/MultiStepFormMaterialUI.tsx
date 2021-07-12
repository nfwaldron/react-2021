import { Stepper, StepLabel, Step, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '6rem auto',
    border: '1px solid #999'
  }
});

export const MultiStepFormMaterialUI: React.FC = () => {
  type FormSteps = 'Sign Up' | 'Choose Plan' | 'Checkout';

  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getSteps = () => {
    return ['Sign Up', 'Choose Plan', 'Checkout'];
  };

  const steps = getSteps();

  const getStepContent = (index: number) => {
    switch (index) {
      case 0:
        return 'Sign Up';
      case 1:
        return 'Choose Plan';
      case 2:
        return 'Checkout';
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      {activeStep === steps.length ? (
        'Steps Complete'
      ) : (
        <>
          {getStepContent(activeStep)}
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
        </>
      )}
    </div>
  );
};
