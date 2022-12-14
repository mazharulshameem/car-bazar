import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const AllBuyers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://carbazar-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handleAdmin = (id) => {
    fetch(`https://carbazar-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin SuccessFull");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Added</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr className="hover" key={user._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleAdmin(user._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Admin
                  </button>
                )}
              </td>
              <td>
                <button className="btn  btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
