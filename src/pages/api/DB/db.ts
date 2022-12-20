import mysql from "mysql2";

export default class db {
  Con;
  constructor() {
    this.Con = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASS,
      database: process.env.DB,
    });
  }
  qeryEXE(query: string): Promise<object> {
    return new Promise((data) => {
      this.Con.query(query, (err: any, result: any) => {
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
}
