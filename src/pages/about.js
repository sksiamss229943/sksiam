import React from "react"
import siam_img from "../assets/siam.jpg"
import Layout from "../components/Layout"

function About() {
  return (
    <Layout>
      <div id="about" className="main_about">
        <h1
          data-aos="fade-up"
          className="text-5xl font-bold text-center md:my-10 mb-5 md:hidden"
        >
          About Me
        </h1>
        <div
          data-aos="fade-up"
          className="about__container md:my-10 grid grid-cols-1 md:grid-cols-2 md:items-center p-10 gap-10 md:p-0 md:pr-7 md:py-10"
        >
          <section className="left">
            <img
              src={siam_img}
              data-aos="fade-up"
              alt="Siam Image"
              className="rounded-lg md:w-[30rem] lg:w-[35rem]"
            />
          </section>
          <section className="right md:mt-11 md:space-y-3 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-10 hidden md:inline-block">
              About Me
            </h1>
            <h1 className="text-justify mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              suscipit et. Nisi, expedita id nostrum ducimus alias porro!
              Quibusdam inventore dolorem aspernatur quam! Facilis at velit
              cupiditate ipsa quos autem.
            </h1>
            <h1 className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              suscipit et. Nisi, expedita id nostrum ducimus alias porro!
              Quibusdam inventore dolorem aspernatur quam! Facilis at velit
              cupiditate ipsa quos autem.
            </h1>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About
