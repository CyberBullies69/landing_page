import Image from "next/image";
import { Button } from "./ui/button";

const Section2 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-black font-bold text-5xl">
          Empowering Healthcare Connections
        </h1>
        <h1 className="text-blue-600 font-bold text-5xl">
          Discover Our Innovative Platform Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-16">
          <div className="flex items-center justify-center p-6 max-w-xl">
            <div className="rounded-xl px-6 text-center bg-yellow-50">
              <h1 className="text-blue-600 font-bold text-3xl mt-14 mb-2">
                Find Job
              </h1>
              <p>
                Explore nationwide job opportunities, connect with colleagues,
                access continuing education, and launch a freelance career with
                ease. Join us to propel your healthcare career to new heights.
              </p>

              <Image
                src="card1.svg"
                width={800}
                height={800}
                alt="card1"
              ></Image>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 max-w-xl">
            <div className="rounded-xl px-6 text-center bg-cyan-200">
              <h1 className="text-blue-600 font-bold text-3xl mt-14 mb-2">
                Find Job
              </h1>
              <p>
                Explore nationwide job opportunities, connect with colleagues,
                access continuing education, and launch a freelance career with
                ease. Join us to propel your healthcare career to new heights.
              </p>

              <Image
                src="card2.svg"
                width={800}
                height={800}
                alt="card2"
              ></Image>
            </div>
          </div>          
        </div>

        <div className="p-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-200 rounded-xl">
              <div className="p-6 max-w-xl">
                  <h1 className="text-black font-bold text-3xl mt-14 mb-2">
                    <span className="text-blue-600">Streamline Hiring</span><br /> Processes and Access Top Talent. 
                  </h1>
                  <p>Effortlessly connect with qualified healthcare professionals on our platform. Filter candidates by specialty and location. Streamline recruitment, manage workforce, and access valuable resources for organizational success.  
                  </p>

                  <Button className="mt-10 p-6">Get Started For Free Now</Button>
              </div>
              <div>
                <Image
                  src="card3.svg"
                  width={800}
                  height={800}
                  alt="card3"
                ></Image>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Section2;
