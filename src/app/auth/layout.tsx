import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png"

type Props = {
  children: React.ReactNode;
};
const Layout = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <div className=" h-screen w-full justify-center">
      <div className=" w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src={logo}
          alt="image"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className=" hidden lg:flex flex-1 w-full max-h-full max-w-400px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3"> 
        <h2 className=" text-gravel md:text-4xl font-bold">
            Hii, I'm your AI Powered sales assistant, ConvoMaster! 👋👋
     
        </h2>
<p className=" text-iridium md:text-sm mb-10">
    ConvoMaster is capable of capturing lead informations without a form .
<br />
Something never done before 🌟. 
</p>

<Image
src={""}
alt="dashboard page"
loading="lazy"
sizes="3 k0"
/>
      </div>
    </div>
  );
};

export default Layout;
