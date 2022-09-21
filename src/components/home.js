import React, { useRef } from "react";
import logo from "../assets/image/logo.png";
import "../style.css";
import Typewriter from "typewriter-effect";
import Coding from "../assets/image/coding.png";
import Github from "../assets/svg/github.svg";
import Twitter from "../assets/svg/twitter.svg";
import Facebook from "../assets/svg/facebook.svg";
import Linkdin from "../assets/svg/linkdn.svg";
import instgram from "../assets/svg/instagram.svg";
import Design from "../assets/image/design.jpg";
import C3 from "../assets/image/scg.jpg";
import C4 from "../assets/image/stikesmi1.jpg";
import pdf3 from "../assets/downloads/scg.pdf";
import pdf4 from "../assets/downloads/stikesmi.pdf";
import Youtube from "../assets/svg/youtube.svg";
import C2 from "../assets/image/certificate3.jpg";
import pdf2 from "../assets/downloads/certificate nasional.pdf";
import "../assets/styles.scss";
import pdf1 from "../assets/downloads/AJI RAMDANI.pdf";
import "../assets/style2.css";
import ui from "../assets/image/ui.jpg";
import Icon1 from "../assets/svg/icon1.svg";
import C1 from "../assets/image/certificate1.jpg";
import Icon2 from "../assets/svg/icon2.svg";
import Icon3 from "../assets/svg/icon3.svg";
import robotiks from "../assets/image/robotik.jpg";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hvggkm1", "template_s76c9vc", form.current, "lwnmH4wirznwX92dT").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        Swal.fire({
          title: "Are you sure?",
          text: "You will send a message to admin !!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Sent Message!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("message sent!", "your message will be accepted by admin.", "success");
          }
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  const alertbarRef = useRef(null);
  return (
    <div className="Home">
      {/* sectiom hero */}
      <section id="Home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="block font-semibold text-black text2 md:text-xl lg:text-2xl">
                {" "}
                Hello,<span className="font1 block font-bold text-black text-4xl mt-1 lg:text-5xl"> I Am Aji Ramdani</span>
              </h1>
              <p className="font-medium text-secondary text-lg mb-5 md:text-sm">
                Graphic Designer || UI UX Designer || Web Develover
                <span className="block font-bold mb-12">
                  School Majoring In
                  <span className="text-blue-500">
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ["Sofware Enginering", "Smks Terpadu Ibadurrahman"],
                      }}
                    />
                  </span>
                </span>
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6289508742700&text=Halo%20Kak%20ARI%20%2C%20Apa%20kabarnya%20%3F"
                className="text-base font-bold text-white bg-blue-500 py-3 px-8 rounded-lg hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>{" "}
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className=" relative mt-10 lg:mt-9 lg:right-0">
                <img src={logo} alt="ARI" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* About section*/}
      <section id="About" className="pt-36 pb-32">
        <div className="conteiner">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-blue-400 text- mb-3">About Me</h4>
              <p className="font-medium text-gray-600 mb-10 leading-relaxed ">
                {" "}
                I am a student at the Ibadurrahman Integrated Vocational High School and I majored in software engineering, I also attended 2 extra courses, namely Robotics and the IT Club. outside of school hours I always learn about
                technology and I want to realize my dream of becoming a developer. I have mastered in the fields of graphic design, robotics, content creator, ui/ux design and Front End Development. and I want to learn more in the field
                that I'm good at
              </p>
            </div>{" "}
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-black text-2xl mb-4 ">Mari Berteman</h3>
              <p className="font-medium text-base text-gray-600 mb-6 lg:text-lg"> let's be good friends so that we can establish closer brotherhood, by following each other on social media. Social media links are below</p>
              <div className="flex items-center">
                {/* github */}
                <a
                  href="https://github.com/AjiRamdaniARM"
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={Github} width="20" className="fill-current" />
                </a>
                {/* linkdin */}
                <a
                  href="https://www.linkedin.com/in/aji-ramdani-ari-016bb1250"
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={Linkdin} width="20" className="fill-current" />
                </a>
                {/* facebook */}
                <a
                  href="https://web.facebook.com/sahrucl.kan"
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={Facebook} width="20" className="fill-current" />
                </a>
                {/* twitter */}
                <a
                  onClick={() => alert("admin belum mempunyai akun")}
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={Twitter} width="20" className="fill-current" />
                </a>
                {/* youtube */}
                <a
                  href="https://www.youtube.com/channel/UCZHCz1m7pBwzDvTe9sC08Yw"
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={Youtube} width="20" className="fill-current" />
                </a>
                {/* instagram */}
                <a
                  href="https://www.instagram.com/ajiramdani_04/"
                  target="_blank"
                  className="w-9 h-9 mr-3 flex justify-center items-center border border-gray-300 rounded-full
                hover:border-teal-500 hover:bg-teal-500 "
                >
                  <img src={instgram} width="20" className="fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end About section*/}
      {/* start section */}
      <section id="portofolio" className="pt-36 pb-16 bg-gray-400">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-blue-400 text-3xl">Skill</h2>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center ">
            <div className="mb-12 p-4  ">
              <img src={Icon1} />
              <img src={Icon2} />
              <img src={Icon3} />
            </div>
          </div>
        </div>
      </section>
      {/* project section  */}
      <section className="pt-36 pb-32 bg-gray-800" id="clients">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-white text-3xl"> Project</h2>
              <h4 className="font-medium text-white">Coding || Design Graphic || UI UX Design </h4>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="/coding">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={Coding} alt="landing-coding" width="w-full" />
                  <h3 className="font-semibold text-white text-xl mb-5 mb-3"> Project Coding</h3>
                  <p className="font-medium text-base text-gray-500">Kumpulan Project-project hasil ngoding</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="/design">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={Design} alt="landing-coding" width="w-full" />
                  <h3 className="font-semibold text-white text-xl mb-5 mb-3"> Project Design Graphic</h3>
                  <p className="font-medium text-base text-gray-500">Kumpulan Project-project hasil Ngedesign</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href="/uiux">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={ui} alt="landing-coding" width="w-full" />
                  <h3 className="font-semibold text-white text-xl mb-5 mb-3"> Project UI UX DESIGN</h3>
                  <p className="font-medium text-base text-gray-500">Kumpulan Project-project hasil Ngedesign web, aplikasi</p>
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a onClick={() => alert("belum ada project tersedia")}>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={robotiks} alt="landing-coding" width="w-full" />
                  <h3 className="font-semibold text-white text-xl mb-5 mb-3"> Project Robotics</h3>
                  <p className="font-medium text-base text-gray-500">Kumpulan Project-project hasil bikin robots</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section certificate */}
      <section className="pt-36 pb-32 bg-gray-100" id="certificate">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-blue-400 text-3xl"> Certificate</h2>
              <h4 className="font-medium text-black">Kompetisi || Seminar/Webinar || Beasiswa </h4>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href={pdf4}>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={C4} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href={pdf3}>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={C3} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href={pdf1}>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={C1} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2 hover:shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out">
              <a href={pdf2}>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={C2} alt="landing-coding" width="w-full" />
                </div>
              </a>
            </div>
            <a href="https://www.linkedin.com/in/aji-ramdani-ari-016bb1250">
              <h1 className="font-bold text-blue-500 hover:text-black"> Lebih Banyak </h1>
            </a>
          </div>
        </div>
      </section>
      {/* section contact */}
      <section className="pt-36 pb-32" id="contact">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-8">
              <h4 className="font-semibold text-blue-500 "> Contact</h4>
              <h2 className="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
              <p className="font-medium text-md text-gray-400 md:text-lg ">if you have a need or buy our services</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label for="name" className="text-base font-bold text-blue-300 uppercase">
                  Nama
                </label>
                <input type="text" id="name" name="name" className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-1 focus:border-blue-500" />
              </div>
              <div className="w-full px-4 mb-8">
                <label for="email" className="text-base font-bold text-blue-300 uppercase">
                  Email
                </label>
                <input type="email" name="user_email" id="Email" className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-1 focus:border-blue-500" />
              </div>
              <div className="w-full px-4 mb-8">
                <label for="message" className="text-base font-bold text-blue-300 uppercase">
                  Pesan
                </label>
                <textarea type="message" name="message" id="message" className="w-full bg-gray-200 text-black p-3 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-1 focus:border-blue-500 h-32"></textarea>
              </div>
              <div className="w-full px-4">
                <button type="submit" value="send" className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  <input type="submit" value="Send" />
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-black pt-24 pb-12">
        <div className="continer">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-gray-400 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">ARI</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>hilmankeren0936@gmail.com</p>
              <p>Jl.Plabuhan II Sampora No.004</p>
              <p>Sukabumi</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="" className="inline-block text-base hover:text-blue-300 mb-3">
                    Programmer
                  </a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-blue-300 mb-3">
                    Design Graphic
                  </a>
                </li>
                <li>
                  <a href="" className="inline-block text-base hover:text-blue-300 mb-3">
                    Ui Ux Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tautan</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="/" className="inline-block text-base hover:text-blue-300 mb-3">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#About" className="inline-block text-base hover:text-blue-300 mb-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portofolio" className="inline-block text-base hover:text-blue-300 mb-3">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#contact" className="inline-block text-base hover:text-blue-300 mb-3">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#clients" className="inline-block text-base hover:text-blue-300 mb-3">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="inline-block text-base hover:text-blue-300 mb-3">
                    Certificate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
