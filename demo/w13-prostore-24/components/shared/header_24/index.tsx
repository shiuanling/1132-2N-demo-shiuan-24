import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import {
  EllipsisVertical,
  ShoppingCart,
  User2Icon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle_24 from "./mode-toggle_24";

const Header_24 = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              height={48}
              width={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
          </Link>
        </div>
        <div className="flex justify-end gap-3">
          <ModeToggle_24 />
          <Button asChild variant="outline">
            <Link href="/cart_24">
              <ShoppingCart /> Cart_24
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in_24">
              <UserIcon /> SignIn_24
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header_24;
