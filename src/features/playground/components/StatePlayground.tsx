import { useState } from "react";

interface UserProfile {
  firstName: string;
  lastName: string;
  role: string;
}

export const StatePlayground = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [user, setUser] = useState<UserProfile>({
    firstName: "John",
    lastName: "Doe",
    role: "Developer",
  });

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-gray-50" : "bg-white text-gray-900"}`}
    >
      <h1 className="text-3xl font-bold mb-6">State Playground</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="mt-6 border p-4 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {user.firstName} {user.lastName} Profile
        </h2>
        <p className="text-lg">Role: {user.role}</p>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className="border p-2 rounded shadow-md"
          />
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className="border p-2 rounded shadow-md"
          />
          <input
            type="text"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="border p-2 rounded shadow-md"
          />
          {/* <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              alert(
                `User Profile Updated: ${user.firstName} ${user.lastName}, Role: ${user.role}`,
              )
            }
          >
            Update Profile
          </button> */}
        </div>
      </div>
    </div>
  );
};
