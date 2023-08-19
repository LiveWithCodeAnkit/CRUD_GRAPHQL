"use client";
import { FaUser } from "react-icons/fa";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useClient } from "./hook/useClient";

export default function AddClientModal() {
  const { initialValues, schema, submit, handleModel, modelStatus } =
    useClient();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submit}
      >
        <Form>
          <button type="button" onClick={handleModel}>
            <div className="flex  justify-center items-center gap-2 bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2 ">
              <FaUser />
              Add Client
            </div>
          </button>

          {modelStatus && (
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col p-3 items-center justify-center z-10">
              <div className="flex flex-col bg-slate-400 p-5 justify-center items-center gap-4 rounded-xl">
                <div className="text-2xl font-extrabold">
                  <h1>Add Client</h1>
                </div>
                <div className="flex flex-col">
                  <label className="text-xl font-bold">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="h-10 rounded-lg p-2"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl font-bold">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="h-10 rounded-lg p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xl font-bold">Phone</label>
                  <Field
                    type="phone"
                    id="phone"
                    name="phone"
                    className="h-10 rounded-lg p-2"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-orange-700"
                  />
                </div>
                <div className="flex justify-between items-start w-full">
                  <button
                    className="bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2"
                    onClick={handleModel}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </>
  );
}
