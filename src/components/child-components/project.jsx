import React, { useEffect, useState } from "react";
import axios from "axios";
import bg1 from "../../assets/bg-3.jpg";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [error, setError] = useState("");
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/get");
        const projectDataWithImages = response.data.map((project) => {
          const base64Image = btoa(
            new Uint8Array(project.image.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return { ...project, base64Image };
        });

        setProjects(projectDataWithImages);
        setFilteredProjects(projectDataWithImages);
      } catch (error) {
        setError("Error fetching the project details");
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectTypeChange = (type) => {
    setProjectType(type);

    if (type === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.projectType === type);
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <div
        className="w-full h-[70vh] bg-cover bg-center flex flex-col items-center justify-center p-20 relative"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-6xl text-white font-bold drop-shadow-lg animate-fadeInDown">
          Our Projects
        </h1>
      </div>

      {/* Navigation Bar */}
      <div className="px-5 py-6 bg-white shadow-md sticky top-0 z-20">
        <div className="flex flex-wrap justify-center gap-4">
          {["", "Prestigious", "Ongoing", "Completed", "Upcoming"].map((type) => (
            <button
              key={type}
              onClick={() => handleProjectTypeChange(type)}
              className={`px-4 py-2 rounded-full border ${
                projectType === type
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-blue-100"
              } transition-all duration-300`}
            >
              {type === "" ? "All Projects" : `${type} Projects`}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col mt-8 px-5">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="w-full px-5 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((projectData, index) => (
              <div
                key={projectData._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <img
                  src={`data:image/jpeg;base64,${projectData.base64Image}`}
                  alt={projectData.projectName}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Project Details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-gray-800">{projectData.projectName}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    <strong>Description:</strong> {projectData.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-600 text-center col-span-full py-10">No projects found</p>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Project;
