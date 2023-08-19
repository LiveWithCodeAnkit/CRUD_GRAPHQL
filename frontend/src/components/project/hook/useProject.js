import React, { useEffect, useState } from "react";
import { projectSchema } from "../schema/projectSchema";
import { ADD_PROJECT, UPDATE_PROJECT } from "@/mutations/projectMutations";
import { GET_PROJECT, GET_PROJECTS } from "@/queries/projectQueries";
import { useMutation } from "@apollo/client";

export const useProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const initialValues = {
    name: "",
    description: "",
    status: "",
    clientId: "",
  };

  // variables: { id: project.id, name, description, status },

  const [addProject] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const handleSubmit = async (values) => {
    const { name, description, status, clientId } = values;
console.log("i call");
    // await addProject({
    //   variables: { name, description, status, clientId },
    // });
    // resetForm();
    // handleOpen();
  };

  return {
    initialValues,
    schema: projectSchema,
    submit: handleSubmit,
    handleModel: handleOpen,
    modelStatus: open,
  };
};
