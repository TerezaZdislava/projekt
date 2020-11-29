import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import Checkbox from './Checkbox.js';

const StyledFormFood = styled.div`
  padding: 1rem;

  .formFood-all {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 16px 0px rgba(50, 50, 50, 0.75);
    background-color: white;
  }
  h5 {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 0;
    padding: 0.7rem;
  }
  .formFood-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const FormFood = ({ values }) => {
  return (
    <StyledFormFood>
      <div className="formFood-all">
        <h5>Jaké potraviny se nemají v jídelníčku vyskytovat?</h5>
        <div
          className="formFood-group"
          role="group"
          aria-labelledby="checkbox-group"
        >
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="maso"
            label="Maso"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="mléko"
            label="Mléko"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="vejce"
            label="Vejce"
          />
          <Checkbox
            formValues={values}
            name="excludedFood"
            value="lepek"
            label="Lepek"
          />
        </div>
      </div>
    </StyledFormFood>
  );
};

export default FormFood;
