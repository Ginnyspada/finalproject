import { Outlet, useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
export default function List() {
  const list = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <br></br>
      <h1>My to do List</h1>
      <ul class="list-group">
        <li class="list-group-item justify-content-between align-items-center d-flex border-end-0 border-start-0  border-bottom rounded-0 mb-2">
          <div class=" align-items-center">Do the Laundry</div>
        </li>
        <li class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div class="align-items-center">
            <s>Prep Suitcase</s>
          </div>
        </li>
        <li class="list-group-item  d-flex justify-content-between align-items-center d-flex border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div class=" align-items-center">
            <s>Finish Project</s>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div class="align-items-center">Arrange Documents</div>
        </li>

        <li class="list-group-item  justify-content-between align-items-center d-flex border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <div class="align-items-center">Go to the airport</div>
        </li>
      </ul>
      <ul className=" nav-tabs mb-4">
        <li className="nav-item">
          <Link to="/list/incomplete" className="nav-link">
            Tasks to be completed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/list/completed" className="nav-link">
            Completed Tasks
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
