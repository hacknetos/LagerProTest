import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Login, getRolls } from "../DB/singolDB";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      type: "credentials",
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials, req) {
        let res: any = await Login(
          credentials?.username,
          credentials?.password
        );
        if (res.length <= 0) {
          return null;
        }
        let rol = await getRolls(res[0].userID.toString());

        const user = {
          id: `${res[0].userID}`,
          name: `${res[0].firstName} ${res[0].lastName}`,
          email: `${res[0].username}`,
          rolls: rol,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.rolls = user.rolls;
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.rolls = token.rolls;
      return session;
    },
    pages: {
      signIn: "/",
    },
  },
};

export default NextAuth(authOptions);
