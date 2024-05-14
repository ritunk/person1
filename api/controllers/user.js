import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tablecrud";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO tablecrud(`name`, `email`, `phone`, `date`) VALUES(?)";

  const values = [req.body.name, req.body.email, req.body.phone, req.body.date];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("success.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE tablecrud SET `name` = ?, `email` = ?, `phone` = ?, `date` = ? WHERE `id` = ?";

  const values = [req.body.name, req.body.email, req.body.phone, req.body.date];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Scuesses.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM tablecrud WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Sucess.");
  });
};
