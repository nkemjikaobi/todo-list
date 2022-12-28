import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomSelect from "@components/atoms/CustomSelect/CustomSelect";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";

import {
  ButtonProperties,
  errorMessages,
  statusOptions,
} from "@shared/libs/helpers";

interface EditTaskProps {
  setShowTask: Function;
}

const EditTask: React.FC<EditTaskProps> = ({ setShowTask }) => {
  const [status, setStatus] = useState<string>("");

  const initialState = {
    title: "",
    status: "",
  };

  interface Values {
    title: string;
    status: string;
  }

  const addTaskSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required(errorMessages.required),
  });

  const handleSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>
  ) => {
    // todo
  };

  return (
    <div className="bg-white p-8 rounded-md">
      <h4 className="text-20 font-bold text-todoGray-100 my-4 capitalize">
        update todo
      </h4>
      <Formik
        enableReinitialize
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={addTaskSchema}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative">
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Title"
                />

                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="title"
                  placeholder="Enter Title"
                  type="text"
                />
              </div>
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Status"
                />

                <CustomSelect
                  className="rounded-md border h-[3.75rem] !w-full"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  options={statusOptions}
                  parentContainer="my-4"
                  value={status}
                />
              </div>
            </div>
            <div className="flex items-center">
              <CustomButton
                customClass="mt-12 !h-[3.75rem] !w-[9.375rem] mr-8"
                handleClick={() => {}}
                // isDisabled={loading}
                // isSubmitting={loading}
                size={ButtonProperties.SIZES.big}
                title="UPDATE TASK"
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
              <CustomButton
                customClass="mt-12 !h-[3.75rem] !w-[9.375rem] bg-todoGray-100 border-todoGray-100 hover:!bg-gray-500"
                handleClick={() => setShowTask(false)}
                size={ButtonProperties.SIZES.big}
                title="CANCEL"
                variant={ButtonProperties.VARIANT.primary.name}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTask;
