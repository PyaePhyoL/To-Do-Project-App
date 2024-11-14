import { createContext, useContext, useState } from "react";

const ProjectListContext = createContext();

export const ProjectListProvider = ({children}) => {

    const [projects, setProjects] = useState([
        {
            title: "Learning React",
            date: "2024-12-29",
            description: "Learn React from the ground up.",
            tasks: [],
        },
        {
            title: "Mastering React",
            date: "2025-1-30",
            description: "Learn React from the ground up.",
            tasks: []
        },
    ]);

    return (
        <ProjectListContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectListContext.Provider>
    )
}

export const useProjectList = () => useContext(ProjectListContext);