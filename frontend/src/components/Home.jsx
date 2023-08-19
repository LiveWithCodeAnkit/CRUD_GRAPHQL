import AddClientModal from "./AddClientModal";
import AddProjectModal from "./AddProjectModal";
import Clients from "./Clients";
import Projects from "./Projects";

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
