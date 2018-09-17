import React from "react";
import PropTypes from "prop-types";
import MobileStepper from "material-ui/MobileStepper";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const ProgressMobileStepper = ({
  activeStep,
  items,
  handleNext,
  handleBack,
  nextEnabled
}) => {
  return (
    <MobileStepper
      variant="progress"
      steps={items.length}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === items.length - 1 || !nextEnabled}
        >
          Дальше <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Назад
        </Button>
      }
    />
  );
};

export default ProgressMobileStepper;
