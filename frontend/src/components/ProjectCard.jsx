import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <Link
              className="bg-blue-800 text-white text-base rounded-md font-bold px-4 py-2 "
              href={`/projects/${project.id}`}
            >
              View
            </Link>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
