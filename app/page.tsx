import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-indigo-400/40">
        <Section1/>
        <Section2/>
      </div>
    </>
  );
}
