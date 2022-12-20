import db from "./db";
const DB = new db();

export async function Login(username?: string, password?: string) {
  if (!username || !password) {
    return null;
  }
  return await DB.qeryEXE(
    `SELECT * FROM user where passwordHash='${password}' and username='${username}' `
  );
}
export async function getRolls(Userid: string) {
  if (!Userid) {
    return null;
  }
  return await DB.qeryEXE(
    `SELECT role.* FROM userrole JOIN role on role.roleID = userrole.RoleID where userrole.UserID = ${Number(
      Userid
    )}`
  );
}
export async function GetGeräte() {
  return await DB.qeryEXE("SELECT * FROM `Test Gerät` ");
}
