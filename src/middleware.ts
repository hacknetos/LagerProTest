import { withAuth } from "next-auth/middleware";

let isAuth = false;

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (
        (req.nextUrl.pathname.startsWith("/Ausleihen") &&
          isAutorised(token?.rolls, "User")) ||
        (req.nextUrl.pathname.startsWith("/Admin") &&
          isAutorised(token?.rolls, "Admin")) ||
        (req.nextUrl.pathname.startsWith("/Intigrativ") &&
          isAutorised(token?.rolls, "Intigrative")) ||
        (req.nextUrl.pathname.startsWith("/Lager") &&
          isAutorised(token?.rolls, "Lager"))
      ) {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/",
  },
});
export const config = {
  matcher: [
    "/Ausleihen/(.*)",
    "/Admin/(.*)",
    "/Intigrativ/(.*)",
    "/Lager/(.*)",
  ],
};
function isAutorised(roles: any, role: string) {
  if (!roles) {
    return false;
  }
  if (roles.some((rolle: any) => rolle.name == role)) {
    return true;
  }
  return false;
}
