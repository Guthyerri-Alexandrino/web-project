import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//import "./App.css";

import Home from "./components/Atividade_3/Home";
import About from "./components/Atividade_3/About";
import CreateStudent from "./components/Atividade_3/crud/student/CreateStudent";
import ListStudent from "./components/Atividade_3/crud/student/ListStudent";
import EditStudent from "./components/Atividade_3/crud/student/EditStudent";
import CreateTeacher from "./components/Atividade_3/crud/teacher/CreateTeacher";
import ListTeacher from "./components/Atividade_3/crud/teacher/ListTeacher";
import EditTeacher from "./components/Atividade_3/crud/teacher/EditTeacher";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="{}"
                ID="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createStudent" className="dropdown-item">
                    Criar Estudante
                  </Link>
                </li>
                <li>
                  <Link to="/listStudent" className="dropdown-item">
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="{}"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createTeacher" className="dropdown-item">
                    Criar Professor
                  </Link>
                </li>
                <li>
                  <Link to="/listTeacher" className="dropdown-item">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="listTeacher" element={<ListTeacher />} />
        <Route path="editTeacher/:id" element={<EditTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
