import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e, loadMore = false) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const nextPage = loadMore ? page + 1 : 1;

      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: nextPage,
      });

      setUsers((prev) =>
        loadMore ? [...prev, ...data.items] : data.items
      );
      setPage(nextPage);
    } catch {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          GitHub Advanced User Search
        </h1>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded bg-gray-900 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 rounded bg-gray-900 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="number"
            placeholder="Min repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-3 rounded bg-gray-900 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-semibold"
          >
            Search
          </button>
        </form>

        {/* States */}
        {loading && (
          <p className="text-center text-gray-300 animate-pulse">
            Searching GitHub...
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center font-medium">{error}</p>
        )}

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-gray-800/70 p-4 rounded-lg hover:scale-105 transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
              />

              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {users.length > 0 && !loading && (
          <button
            onClick={(e) => handleSearch(e, true)}
            className="block mx-auto mt-8 px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-full font-semibold"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
