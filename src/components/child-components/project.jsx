import React, { useEffect, useState } from "react";
import axios from "axios";
import bg1 from "../../assets/bg-3.jpg"


const Project = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

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
      } catch (error) {
        setError("Error fetching the project details");
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
        <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center p-10" style={{ backgroundImage: `url(${bg1})` }}>
    </div>
    <div className="flex flex-col mt-5 px-5">
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full px-5 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.length > 0 ? (
          projects.map((projectData) => (
            <div
              key={projectData._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={`data:image/jpeg;base64,${projectData.base64Image}`}
                alt={projectData.projectName}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {projectData.projectName}
                </h3>
                <p className="text-gray-700 mt-2 text-sm h-20 overflow-hidden hover:overflow-auto transition-all duration-300">
                  <strong>Description:</strong> {projectData.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-600 p-10 text-center">Loading project details...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Project;