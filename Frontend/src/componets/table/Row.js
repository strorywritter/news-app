import React, { useState } from 'react'
import { db } from "../../firebase/firebase";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Row(props) {

    const [item, setItem] = React.useState(props.item);
    const [editRole, setEditRole] = useState(true);
    const [role, setRole] = useState(props.item.role);

    const editUserRole = async (e, userId) => {
        e.preventDefault();
        console.log("edit role done")
        console.log(userId)
        setEditRole(true)
        try {
            const updateRole = await db.collection("users").doc(userId).update({ "role": role });
            console.log(updateRole);
            setItem({ ...item, role: role })
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const editField = async (e, role) => {
        setEditRole(false)
        setRole(role)
    };

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (

        <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
            >
                {item.name}
            </th>
            <td className="px-6 py-4">
                {editRole === true ? (<>{item.role}</>) : (
                    // <input value={role} disabled={editRole} onChange={(e) => setRole(e.target.value)} />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={"user"}>User</MenuItem>
                        <MenuItem value={"aditor"}>Editor</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                    </Select>
                )}
                {/* <input value={item.role} disabled={editRole} onChange={(e) => setRole(e.target.value)}/> */}
            </td>
            <td className="px-6 py-4 text-right">
                <div
                    // onClick={(e) => setEditRole(false)}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline hover:text-red-700 cursor-pointer"
                >
                    {editRole === true ?
                        (<a onClick={(e) => editField(e, item.role)}>Edit Role </a>) : (<a onClick={(e) => editUserRole(e, props.docId)}>Done</a>)
                    }
                </div>
            </td>
        </tr>

    )
}
