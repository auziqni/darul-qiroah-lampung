import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className=" bg-blue-950 pt-10 px-10 text-white ">
      <div id="link" className="grid grid-cols-1 gap-14">
        {/* logo */}
        <div className=" flex flex-row gap-5 ">
          <Link id="nav-logo" className="" href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex flex-col justify-center text-2xl font-bold">
            <h3>Darul Qiroah</h3>
            <h3>Lampung</h3>
          </div>
        </div>
        {/* logo end */}

        <div id="navigation">
          <h3 className=" text-xl mb-6">Navigasi</h3>

          <ul className=" text text-slate-400 flex flex-col gap-4 ">
            <li>Tentang Kami</li>
            <li>Buku Qiroah</li>
            <li>Donasi</li>
          </ul>
        </div>

        <div id="contact">
          <div id="office">
            <h3 className=" text-xl mb-6">Kontak</h3>
            <ul className=" text text-slate-400 flex flex-col gap-4 ">
              <li>Email : darulqiroahlampung@gmail.com</li>
              <li>Phone : +62 822 0000 0000</li>
              Alamat : Jl. Kapten Abdul Haq No.17A, Gang Banten, Kec. Rajabasa,
              Kota Bandar Lampung, Lampung 35144
            </ul>
          </div>
          <div id="social-media"></div>
        </div>
      </div>
      <div
        id="copyrigt"
        className=" mt-16 pt-3 border-t border-slate-500 text-slate-500 text-sm text-center"
      >
        copyright &copy;2024 Yayasan Darul Qiroah Lampung | Teknisee. <br />{" "}
        Seluruh hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}
