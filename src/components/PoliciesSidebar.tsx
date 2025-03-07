"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PoliciesSidebar = () => {
  const pathname = usePathname();
  const lastSegment: string = pathname.split("/").pop() as string;
  const currentPath = "/" + lastSegment;
  console.log(currentPath);
  const policies: any[] = [
    {
      name: "Guidelines and Policy",
      url: "/guidelines-and-policy",
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      name: "Terms of Services",
      url: "/terms-of-services",
    },
  ];
  return (
    <div className="min-w-fit -mt-20 sticky top-24 min-h-screen max-h-screen bg-white">
      {policies.map((policy, key) => (
        <Link className="text-lg w-full" href={policy.url} key={key}>
          <div
            className={` min-w-full hover:bg-green-800 hover:text-white py-4 px-4 ${
              currentPath == policy.url
                ? "bg-green-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {policy.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PoliciesSidebar;
