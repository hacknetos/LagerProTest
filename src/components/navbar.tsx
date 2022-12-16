import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Sec from "./navbarcom";
import userSec from "./Usersec";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navLogo">
          <Link href="/">
            <Image
              src={Logo}
              alt={"Logo"}
              placeholder="blur"
              height="90"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="navLinks">
          <Link href={"/"}>Home</Link>
          <Sec></Sec>
        </div>
        <div className="navUser">{userSec()}</div>
      </nav>
    </>
  );
}
