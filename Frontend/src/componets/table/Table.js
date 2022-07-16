
import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import Row from "./Row";


export function DataTable(props) {
  const col = ["Username", "Role"];
  const [editRole, setEditRole] = useState(true);
  const [role, setRole] = useState('');

  const editUserRole = async (e, userId) => {
    e.preventDefault();
    setEditRole(true)
    try {
      const updateRole = await db.collection("users").doc(userId).update({ "role": "editor" });
      console.log(updateRole);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const editField = async (e, role) => {
    setEditRole(false)
    setRole(role)

  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {col.map((item, key) => (

                <th scope="col" className="px-6 py-3" key={key}>
                  {item}
                </th>

              ))}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, key) => (
              <Row item={item.data()} key={item.id} docId={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}