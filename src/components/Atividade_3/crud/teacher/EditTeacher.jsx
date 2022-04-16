import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { teachers } from "./data.js";

const EditTeacher = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState(0);

  const params = useParams();

  useEffect(() => {
    const teacher = teachers[params.id];
    setName(teacher.name);
    setUniversity(teacher.university);
    setDegree(teacher.degree);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${name} \nUniversidade: ${university}\nGraduação: ${degree}`);
  };

  return (
    <div>
      <h2>Editar Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name ?? ""}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Graduação</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTeacher;
