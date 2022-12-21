function qeryEXE(query: string, connection: any): Promise<object> {
  return new Promise((data) => {
    connection.query(query, (err: any, result: any) => {
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

export async function Login(
  username?: string,
  password?: string,
  connection?: any
) {
  if (!username || !password || !connection) {
    return null;
  }
  return await qeryEXE(
    `SELECT * FROM user where passwordHash='${password}' and username='${username}'`,
    connection
  );
}
export async function getRolls(Userid: string, connection: any) {
  if (!Userid) {
    return null;
  }
  return await qeryEXE(
    `SELECT role.* FROM userrole JOIN role on role.roleID = userrole.RoleID where userrole.UserID = ${Number(
      Userid
    )}`,
    connection
  );
}
export async function GetGeräte(connection: any) {
  return await qeryEXE("SELECT * FROM `Test Gerät`", connection);
}
