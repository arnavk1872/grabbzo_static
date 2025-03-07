import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const S3_BASE_URL = "https://publicimgbucket.s3.us-east-1.amazonaws.com";
  return (
    <div className="px-24 h-[68px] font-poppins bg-white flex-shrink-0 blur-0 mb-24 overflow-hidden sticky top-0 z-20">
      <Link href={"/"}>
        <Image
          src={`${S3_BASE_URL}/public/Grabbzo-main-logo.png`}
          width={150}
          style={{ objectFit: "cover", height: "60px" }} 
          height={60}
          alt={"logo"}
          className="flex items-center justify-center cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Header;
