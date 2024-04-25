import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Mail, Twitter } from "lucide-react";

const navbar = () => {
  return (
    <>
      <div className=" bg-blue-200  grid grid-cols-2 gap-4 p-3 h-screen items-top  ">
        <div>
          <h1 className=" font-bold text-black text-5xl">
            {" "}
            Lets Make the Web{" "}
          </h1>
          <h2 className="font-bold text-blue-700 text-5xl"> Prettier</h2>
          <p className="font-m text-lg mt-5 text-black mb-5">
            {" "}
            Experience it first time, and show us its creation!
          </p>
          <div className="flex flex-row space-x-4">
            <Button className=" bg-blue-700 text-lg font-xs mt-4 p-2 rounded-2xl ">
              Get Started
              <img src="icons8-arrow-30.png" className="p-1 "></img>
            </Button>
            <Button className="  text-thin text-white bg-black font-medium mt-4 p-4 rounded-2xl ">
              <img src="icons8-github-24.png " className="p-2"></img>
              Github
            </Button>
          </div>
        </div>
        <div>
          <Card className="w-[350px] bg-white">
            <CardHeader>
              <CardTitle className="text-black font-bold text-center">
                Getting Started
              </CardTitle>
              <CardDescription className="text-black mt-4">Lorem ipsum get aslet .Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
      <footer className="bg-white  items-center ">
        <div className="container mx-auto   text-black">
          <div className="flex justify-between gap-4 items-center">
            <div className="items-center"> 
              <p className="text-black font-xs text-xs mb-3 items-center">DOCLINK All rights are reserved</p>
              
            </div>
            <div className="flex flex-row gap-4 items-center">
           
           <a href=" https://www.instagram.com">
              <Instagram className="h-5 w-5 text-blue-500" />
              </a>
              
              <a href=" https://mail.google.com/">
              <Mail className="h-5 w-5 text-blue-500"></Mail>
              </a>
                
              
              
              
              
            </div>
            <div className="flex flex-row justify-between gap-x-4 items-center">
            <div>
              <p className="text-xs items-center">Privacy Policy</p>
              </div>
              <div>
              <p className="text-xs items-center">|</p>
              </div>
              <div>
              <p className="text-xs items-center">Terms & Condition</p>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default navbar;
