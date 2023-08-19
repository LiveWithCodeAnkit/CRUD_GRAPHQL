"use client";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "@/queries/projectQueries";
import EditProjectForm from "./EditProjectForm";
import DeleteProjectButton from "./DeleteProjectButton";
import ClientInfo from "./ClientInfo";
import Spinner from "./Spinner";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function Project() {
  const params = useParams();
  const id = params.projects;

  console.log("i am param", id);
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  // console.log("i am data :=",data.project);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="flex flex-col px-14 gap-4">
          <div className="flex justify-end items-end  w-full p-3">
            <Link
              href="/"
              className="bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2 "
            >
              Back
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h1>
              <span className="text-xl font-semibold">Project Name :-</span>{" "}
              {data.project.name}
            </h1>
            <h1 className="text-xl font-semibold">Description</h1>
            <p>{data.project.description}</p>
            <h1 className="text-xl font-semibold">Project Status</h1>
            <p className="">{data.project.status}</p>
          </div>

          <ClientInfo client={data.project.client || ""} />

          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
}
