import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { WhatsApp } from "../icons";

export function RsNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          priority
          alt="RosasStore Logo"
          height={38}
          src="/logo-name.png"
          width={90}
        />
        <p className="font-bold text-inherit"> </p>
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsApp height={16} width={16} />
            Whatsapp
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
