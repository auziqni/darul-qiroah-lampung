import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoTwitter, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

export default function Footer() {
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
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Beranda
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Buku Qiroah
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Program
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Artikel
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Kontak
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-green-400">
                Donasi
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact">
          <h3 className=" mb-6 text-xl text-white">Kontak</h3>
          <ul className=" text flex flex-col gap-4 text-slate-400 ">
            <li>Email : darulqiroahlampung@gmail.com</li>
            <li>Phone : +62 822 0000 0000</li>
            Alamat : Jl. Kapten Abdul Haq No.17A, Gang Banten, Kec. Rajabasa,
            Kota Bandar Lampung, Lampung 35144
          </ul>
        </div>

        <div id="Medsos">
          <h3 className=" mb-6 text-xl text-white ">Media Sosial</h3>

          <div className=" flex flex-row gap-3">
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={""}
            >
              {" "}
              <BiLogoTwitter />
            </Link>
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={""}
            >
              <BiLogoInstagram />
            </Link>
            <Link
              className="cursor-pointer text-3xl text-slate-400 hover:text-green-400"
              href={""}
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
