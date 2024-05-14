import mysql2 from "mysql2";

const urlDB = `mysql://root:@localhost:/crud2`;

export const db = mysql2.createConnection(urlDB);
