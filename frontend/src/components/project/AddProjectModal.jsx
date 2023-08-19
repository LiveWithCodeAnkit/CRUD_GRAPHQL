"use client";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { Field, Formik, Form, ErrorMessage } from "formik";

import { GET_CLIENTS } from "@/queries/clientQueries";
import { useProject } from "./hook/useProject";

export default function AddProjectModal() {
  const { initialValues, schema, handleModel,submit, modelStatus } = useProject();

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return null;
  if (error) return "Something Went Wrong";

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={schema}
        onSubmit={submit}
      >
        <Form>
          {!loading && !error && (
            <>
              <button type="button" onClick={handleModel}>
                <div className="flex  justify-center items-center gap-2 bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2 ">
                  <FaList />
                  New Project
                </div>
              </button>
              {modelStatus && (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col p-3 items-center justify-center z-10">
                  <div className=" bg-slate-400 p-5 rounded-xl">
                    <div className="modal-header">
                      <h1 className="modal-title text-2xl">
                        New Project
                      </h1>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-orange-700"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <Field
                          as="textarea"
                          className="form-control"
                          id="description"
                          name="description"
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="text-orange-700"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <Field
                          as="select"
                          id="status"
                          name="status"
                          className="form-select"
                        >
                          <option >Select Project</option>
                          <option value="new">Not Started</option>
                          <option value="progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </Field>
                        <ErrorMessage
                          name="status"
                          component="div"
                          className="text-orange-700"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Client</label>
                        <Field
                          as="select"
                          id="clientId"
                          name="clientId"
                          className="form-select"
                        >
                          <option value="">Select Client</option>
                          {data.clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="clientId"
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
                </div>
              )}
            </>
          )}
        </Form>
      </Formik>
    </>
  );
}
