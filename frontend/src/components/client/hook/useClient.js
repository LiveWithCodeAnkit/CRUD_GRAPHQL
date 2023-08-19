import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { clientSchema } from "../schema/clientSchema";
import { ADD_CLIENT } from "@/mutations/clientMutations";
import { GET_CLIENTS } from "@/queries/clientQueries";

export const useClient = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const [addClient] = useMutation(ADD_CLIENT, {
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, phone } = values;

    await addClient({
      variables: { name, email, phone },
    });
    resetForm();
    handleOpen();
  };
  return {
    initialValues,
    schema: clientSchema,
    submit: handleSubmit,
    handleModel: handleOpen,
    modelStatus: open,
  };
};
