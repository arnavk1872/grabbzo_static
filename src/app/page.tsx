
import Image from "next/image";
import React from "react";
import WhyGrabbzo from "@/components/WhyGrabbzo";
import Footer from "@/components/Footer";

const page = () => {
  const S3_BASE_URL = "https://publicimgbucket.s3.us-east-1.amazonaws.com";
  return (
    <div className="font-poppins">
      <div className="relative">
        <Image
          //Height and width in these specify how clear they look
          src={`${S3_BASE_URL}/public/image.png`}
          width={1000}
          height={1000}
          alt={"home-main"}
          className="h-[80vh] w-full object-cover"
        />
        <div className="flex items-center justify-center">
          {" "}
          <Image
            src={`${S3_BASE_URL}/public/Grabbzo-main-logo.png`}
            alt={"logo"}
            width={1000}
            height={1000}
            className="absolute left-1/2 top-[30%] h-[500px] transform -translate-x-1/2 -translate-y-1/2 w-[26rem] "
          />
          <p className="absolute left-1/3 top-[40%] text-white text-3xl mt-3">
            Explore delicious food & drinks near you
          </p>
        </div>

        {/* <InputBox /> */}
      </div>
     
      <WhyGrabbzo />
      <div className="px-16 mb-10">
  
        <Footer/>
      </div>
    </div>
  );
};

export default page;
