import React from 'react';
import { Field } from 'formik';
import './assets/form.module.css';

const FormFood = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <React.Fragment>
      <p className="formFood-otazka">
        Jaké potraviny se nemají v jídelníčku vyskytovat?
      </p>
      <div className="formFood">
        <div
          className="formFood-group"
          role="group"
          aria-labelledby="checkbox-group"
        >
          <label>
            <Field type="checkbox" name="exludedFood" value="maso" />
            Maso
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="mléko" />
            Mléko
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="vejce" />
            Vejce
          </label>
          <label>
            <Field type="checkbox" name="exludedFood" value="lepek" />
            Lepek
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormFood;
