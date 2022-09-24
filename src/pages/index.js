import Aos from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import image from "../assets/robot.png"
import Layout from "../components/Layout"
import { Navbar } from "../components/Navbar"
import Progress from "../components/Progress"
import About from "./about"
import Projects from "./projects"

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
        <h1
          className="text-5xl font-bold text-center md:text-6xl"
          id="progress"
        >
          My Progress
        </h1>
        <div className="progress__bar grid grid-cols-1 p-10 lg:grid-cols-2 gap-16 items-center">
          <section data-aos="fade-up" data-aos-duration="500" className="left">
            <Progress
              color={"bg-yellow-500"}
              color_name={"HTML"}
              width={"94%"}
            />
            <Progress color={"bg-blue-500"} color_name={"CSS"} width={"59%"} />
            <Progress
              color={"bg-red-500"}
              color_name={"Javascript"}
              width={"49%"}
            />
            <Progress
              color={"bg-amber-500"}
              color_name={"React JS"}
              width={"92%"}
            />
            <Progress
              color={"bg-green-500"}
              color_name={"Next JS"}
              width={"86%"}
            />
            <Progress
              color={"bg-purple-500"}
              color_name={"Gatsby"}
              width={"61%"}
            />
            <Progress
              color={"bg-white"}
              color_name={"Tailwind CSS"}
              width={"57%"}
            />
            <Progress
              color={"bg-pink-500"}
              color_name={"Bootstrap"}
              width={"94%"}
            />
          </section>
          <section data-aos="fade-up" data-aos-duration="500" className="right">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &amp;
                  Marketing pages.
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Marketing UI design in Figma
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  E-Commerce UI code in Tailwind CSS
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </section>
        </div>
        <Projects />
      </Layout>
    </>
  )
}
