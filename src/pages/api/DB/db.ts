import mysql from "mysql2";
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});

function qeryEXE(query: string): Promise<object> {
  return new Promise((data) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return null;
      }
      try {
        data(result);
        return data;
      } catch (error) {
        console.error(err);
        return null;
      }
    });
  });
}

export async function Login(username?: string, password?: string) {
  if (!username || !password) {
    return null;
  }
  return await qeryEXE(
    `SELECT * FROM user where passwordHash='${password}' and username='${username}' `
  );
}
export async function getRolls(Userid: string) {
  if (!Userid) {
    return null;
  }
  return await qeryEXE(
    `SELECT role.* FROM userrole JOIN role on role.roleID = userrole.RoleID where userrole.UserID = ${Number(
      Userid
    )}`
  );
}
