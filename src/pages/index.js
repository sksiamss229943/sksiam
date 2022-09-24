import Aos from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import image from "../assets/robot.png"
import Layout from "../components/Layout"
import { Navbar } from "../components/Navbar"
import About from "./about"

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
      once: true,
    })
  }, [])
  return (
    <>
      <Layout>
        <Navbar />
        <div className="home_container mt-5 md:mt-9 lg:mt-auto grid grid-cols-1 text-center justify-items-center items-center lg:grid-cols-2 lg:text-left gap-5">
          <section className="lg:bg-[#F47400] lg:text-[#f8f8f8] lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center text-center rounded-br-3xl">
            <h1 className="text-4xl font-bold mb-3 md:mt-3 lg:mt-0">
              Hello, I'm
            </h1>
            <h2 className="text-5xl font-extrabold md:text-7xl">
              <TypeAnimation
                sequence={["Ohiduzzaman Siam"]}
                cursor={false}
                speed="2"
              />
            </h2>
          </section>
          <section data-aos="fade-up" className="right mt-7">
            <img src={image} alt="" style={{ width: 550 }} />
          </section>
        </div>
        <About />
      </Layout>
    </>
  )
}
