import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";

export default function Header() {
  return (
    <nav className="p-8 bg-blue-200">
      <div className=" flex justify-center items-center text-blue-900">
        <a className="" href="/">
          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center gap-3 text-4xl">
              <TbBrandNextjs />
              <GrGraphQl />
              <SiApollographql />
              <DiNodejs />
            </div>
            <h1 className="text-4xl font-extrabold">CRUD</h1>
          </div>
        </a>
      </div>
    </nav>
  );
}
