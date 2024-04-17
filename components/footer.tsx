import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoTwitter, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import navigasi from "@/content/static/footer-navigation.json";
import kontak from "@/content/static/footer-kontak.json";

export default function Footer() {
  // const { navigasi, kontak } = footer();
  return (
    <footer id="footer" className=" bg-bgfooter px-10 pt-10 text-white ">
      <div
        id="link"
        className="grid grid-cols-1 gap-14 text-textfooter md:grid-cols-2 lg:grid-cols-4"
      >
        {/* logo */}
        <div className="relative flex h-fit flex-row gap-5 ">
          <Link id="nav-logo" className="" href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex flex-col justify-center text-2xl font-bold text-white">
            <h3>Darul Qiroah</h3>
            <h3>Lampung</h3>
          </div>
        </div>
        {/* logo end */}

        <div id="navigation">
          <h3 className=" mb-6 text-xl text-white ">Navigasi</h3>

          <ul className=" text flex flex-col gap-4 text-slate-400  ">
            {navigasi.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.link} className="hover:text-green-400">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact">
          <h3 className=" mb-6 text-xl text-white">Kontak</h3>
          <ul className=" text flex flex-col gap-4 text-slate-400 ">
            <li className="hover:text-green-400">Email : {kontak.email}</li>
            <li className="hover:text-green-400">Phone : {kontak.telepon}</li>
            <li className="hover:text-green-400">Alamat : {kontak.alamat}</li>
          </ul>
        </div>

        <div id="Medsos">
          <h3 className=" mb-6 text-xl text-white ">Media Sosial</h3>

          <div className=" flex flex-row gap-3">
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={"/"}
            >
              <BiLogoTwitter />
            </Link>
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={"/"}
            >
              <BiLogoInstagram />
            </Link>
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={"/"}
            >
              <BiLogoFacebook />
            </Link>
          </div>
        </div>
      </div>

      <div
        id="copyrigt"
        className=" mt-16 border-t border-slate-500 pt-3 text-center text-sm text-slate-500"
      >
        copyright &copy;2024 Yayasan Darul Qiroah Lampung | Teknisee. <br />{" "}
        Seluruh hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}
