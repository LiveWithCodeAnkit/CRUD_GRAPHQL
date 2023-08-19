import AddClientModal from "../client/AddClientModal";
import Clients from "../client/Clients";
import AddProjectModal from "../project/AddProjectModal";
import Projects from "../project/Projects";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col p-10">
        <div className="flex justify-start items-center gap-8">
          <AddClientModal />
          <AddProjectModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
}
