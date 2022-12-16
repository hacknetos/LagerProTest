import { useSession } from "next-auth/react";
import { Loading } from "@nextui-org/react";
import { AdminDropdown, UserDropdown, IntigrativeDropdown } from "./drodown";

function GetAdminNav(session: any) {
  if (session?.user?.rolls.some((roll: any) => roll.name == "Admin")) {
    return <AdminDropdown key={"AdminDrop"}></AdminDropdown>;
  }
  return <></>;
}
function GetUserNav(session: any) {
  if (session?.user?.rolls.some((roll: any) => roll.name == "User")) {
    return <UserDropdown key={"UserDrop"}></UserDropdown>;
  }
  return <></>;
}
function GetInigrativNav(session: any) {
  if (session?.user?.rolls.some((roll: any) => roll.name == "Intigrative")) {
    return <IntigrativeDropdown key={"IntigrativeDrop"}></IntigrativeDropdown>;
  }
  return <></>;
}

export default function Secs() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status == "loading") {
    return <Loading type="spinner" color={"warning"} />;
  } else if (status == "authenticated") {
    return (
      <>
        {GetAdminNav(session)}
        {GetUserNav(session)}
        {GetInigrativNav(session)}
      </>
    );
  } else if (status == "unauthenticated") {
    return <></>;
  }
  return <></>;
}
