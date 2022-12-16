import { withAuth } from "next-auth/middleware";

let isAuth = false;

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/Ausleihen") &&
      req?.nextauth?.token?.rolls.some((role: any) => role.name == "User")
    ) {
      req.nextauth.token;
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return isAuth;
      },
    },
    pages: {
      signIn: "/",
    },
  }
);
export const config = {
  matcher: [
    "/Ausleihen/:path*",
    "/Admin/:path*",
    "/Intigrativ/:path*",
    "/Lager/:path*",
  ],
};
function isautorised(token: any, role: string) {}
