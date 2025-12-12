import React from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const APP =() => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
}
export default APP;