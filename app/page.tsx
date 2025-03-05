import Share from "@/components/Share";
import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";

const CTAData = [
  {
    id: 1,
    name: "Mobile",
    title: "+33 661 868 868",
    Link: "tel:+33 661 868 868",
    Icon: <IoCall />,
  },
  {
    id: 2,
    name: "Email",
    title: "herve.shooting.class@gmail.com",
    Link: "mailto:herve.shooting.class@gmail.com",
    Icon: <MdEmail />,
  },
];

export default function Home() {
  return (
    <>
      {/* cover area */}
      <div className="w-full h-[220px] bg-gradient-to-b from-[#455a64] to-[#455a64]"></div>
      {/* profile area */}
      <div className="flex px-5 -mt-[70px] flex-col items-center justify-center space-y-4">
        <div className="w-[130px] h-[130px] rounded-full bg-gray-300">
          <Image
            src="/profile.webp"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full w-[130px] h-[130px]"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Hervé SANCHEZ</h1>
          <p className="text-lg mt-2 font-medium text-gray-800">
            Hervé&apos; Shooting Course
          </p>
          <p className="mt-2 text-[15px]">
            Moniteur de tir professionnel <br /> Entraineur fédéral
          </p>
        </div>
      </div>
      {/* call to action */}
      <div className="w-full p-4 md:p-7">
        <ul className="flex flex-col justify-center items-start space-x-4 mt-2 gap-5 ">
          {CTAData.map((item) => (
            <li className="w-full" key={item.id}>
              <Link
                href={item.Link}
                className="flex flex-row justify-start items-center gap-3 border border-slate-200 p-2 rounded-md w-full group transition-all duration-300 hover:bg-slate-200 px-3 "
              >
                <div className="bg-[#455a64] group-hover:bg-[#e91e63] w-[40px] h-[40px] flex flex-col justify-center items-center rounded-md text-white text-lg transition-all duration-300">
                  {item.Icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">{item.name}</span>
                  <span>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* save contact */}
      <div className="w-full pb-10 flex flex-row justify-center items-center gap-5 p-4 px-7">
        <Share />
        <Link href="/vcard_hervé_sanchez.vcf" className="btn">
          <RiUserAddFill />
          Télécharger vCard
        </Link>
      </div>
    </>
  );
}
