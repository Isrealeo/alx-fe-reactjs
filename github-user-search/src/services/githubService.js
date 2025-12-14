import axios from "axios";


const BASE_URL = "https://api.github.com/search/users";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = `${username}`;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      per_page: 6,
    },
  });

  return response.data;
};
