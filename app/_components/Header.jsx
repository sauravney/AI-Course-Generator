import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Link className="flex items-center gap-2 cursor-pointer" href={"/"}>
        <Image src={"/logo.png"} width={44} height={44} />{" "}
        <span className="font-bold text-xl">AI Course Generator</span>
      </Link>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
