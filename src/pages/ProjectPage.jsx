import React, { useRef } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useProjectList } from "../provider/ProjectListProvider";
import TasksBox from "../components/TasksBox";

export default function ProjectPage() {

  const { title } = useParams();
  const {projects} = useProjectList();
  const inputRef = useRef();
  
  const project = projects.find((pj) => pj.title === title);


  const formattedDate = new Date(project.date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  function handleAddTask() {
    const value =  inputRef.current.value;

    if(value) {
      const oldList = project.tasks;
      project.tasks = [...oldList, value]
      inputRef.current.value = '';
    }    
  }

  function handleClear(title) {
    project.tasks = project.tasks.filter(task => task !== title)
}

  return (
    <section className="w-3/5 mt-20 space-y-3">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-gray-500">{project.title}</h1>
        <Button title="Delete" link="" ghost />
      </div>

      <h2 className="text-lg text-gray-400">{formattedDate}</h2>

      <p className="text-lg text-gray-500">
        {project.description}
      </p>

      <div className="bg-gray-300 my-3 h-0.5 w-full"></div>

      <h1 className="text-3xl font-semibold text-gray-500"> Tasks </h1>

      <div className="flex space-x-2">
        <input ref={inputRef} type="text" className="border-b-2 border-gray-300 bg-gray-200 rounded-md px-3 py-1 w-1/2 text-gray-600 text-lg" />
        <Button title="Add Task" link="" clickFunc={handleAddTask} ghost />
      </div>
      {
            (project.tasks.length == 0) 
            ? <p>This project does not have any tasks yet.</p> 
            : 
            <TasksBox tasks={project.tasks} clearFunc={handleClear}/>
          }
    </section>
  );
}
