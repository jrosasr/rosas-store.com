import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import Image from "next/image";
import WhatsApp from "../Icons/Whatsapp";

export default function RsNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="/logo.webp"
          alt="RosasStore Logo"
          width={90}
          height={38}
          priority
        />
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://wa.me/584149796659"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp width={16} height={16} />
            Whatsapp
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
