import axios from "axios";

const GITHUB_API = "https://api.github.com/search/users";
"https://api.github.com/search/users?q"

export const fetchUserData = async ({
  username,
  location = "",
  minRepos = "",
  page = 1,
  perPage = 10,
}) => {
  // Build GitHub search query
  let query = `${username}`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(GITHUB_API, {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    return response.data; // contains items[], total_count
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw new Error("Failed to fetch GitHub users");
  }
};
