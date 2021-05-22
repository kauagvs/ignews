import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Kaua" },
    { id: 3, name: "Semenov" },
  ];

  return response.json(users);
};
