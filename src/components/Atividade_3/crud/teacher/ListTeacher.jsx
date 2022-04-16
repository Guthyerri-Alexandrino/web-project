import React from "react";
import { teachers } from "./data";
import TeacherTableRow from "./TeacherTableRow";

const ListTeacher = () => {
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher) => {
      return <TeacherTableRow teacher={teacher} />;
    });
  }

  return (
    <div>
      <h2>Listar Professor</h2>
      <table className="table table-striped table-hover">
        <thead>
          <th className="text-center">ID</th>
          <th className="text-center">Nome</th>
          <th className="text-center">Universidade</th>
          <th className="text-center">Graduação</th>
          <th className="text-center" colSpan="2">
            Ações
          </th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListTeacher;
