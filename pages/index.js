import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import heroImage from "../images/hero.png";
import selfieImage from "../images/selfie.png";
import notesProjectImage from "../images/project-notes.png";
import groupProjectImage from "../images/project-group.png";
import weatherProjectImage from "../images/project-weather.png";
import Image from "next/image";

const projects = [
  {
    name: "Note Taker Project",
    description: "I completed a notes platform",
    sourceCode: "https://github.com/MaxWFell/Express.js-Challenge-Note-Taker",
    image: notesProjectImage,
  },
  {
    name: "Group Project 2",
    description:
      "Find all of your pets needs in one simple to use app. Browse our carefully curated selection for the finest pet toys, treats, accessories and more! Our motivation for our group project was to create an e-commerce pet website that provides a profile for your pet, products page for pets and support page. We built this to write a collaborative frontend and backend website with GET , POST, PUT and DELETE Routes. We also used tailwind as a technology that would provide a nice design. Also going into this we had to use mySQL for the database and use also used handlebars to link frontend data to the backend. In doing so we learned how to work together as a team. Help each other when we get stuck on different bugs. Overall work unite on workind different sections.",
    link: "https://sleepy-cove-33031.herokuapp.com/",
    sourceCode:
      "https://github.com/MaxWFell/Server-Side-APIs-Challenge-Weather-Dashboard",
    image: groupProjectImage,
  },
  {
    name: "Weather Project",
    description:
      "A free weather guide for planning your day. I created this webpage to help me plan my days based on weather. -Helped build famaliarity using diffrent techniques. -solves the problem of not knowing the weather. -Building this really challenged my java script capabilities.",
    link: "https://maxwfell.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/",
    sourceCode:
      "https://github.com/MaxWFell/Server-Side-APIs-Challenge-Weather-Dashboard",
    image: weatherProjectImage,
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>[Max Fell] | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* Hero */}
        <div className="hero flex justify-center items-center relative bg-black/50 w-screen h-screen text-white">
          <div className="absolute w-screen h-screen overflow-hidden -z-[1]">
            <Image
              alt="Hero image"
              src={heroImage}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <div className="text-6xl font-bold">
              Hi, my name is Max Fell
              <br />
              I'm a new and growing developer.
            </div>
            <a href="#about" className="mt-5 cta-btn cta-btn--hero">
              Know more
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* about */}
        <div className="about-section  py-20 w-screen" id="about">
          <div className="container mx-auto">
            <div className="text-4xl font-bold text-center">ABOUT ME</div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-5 md:px-20">
              <div style={{ width: "300px" }}>
                <Image
                  src={selfieImage}
                  placeholder="blur"
                  style={{ width: "300px", height: "auto" }}
                />
              </div>

              <div className="ml-0 md:ml-20 mt-5 md:mt-0">
                <div className="mb-5">
                  I am a very dedicated, loyal, hardworker. I enjoy working in
                  the financial sector, I am a new Father.
                  <br />I wish to become a financial investor!
                </div>
                <a href="/resume.pdf" className="cta-btn cta-btn--resume">
                  View resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* projects */}
        <div>
          <div className="container mx-auto px-5">
            <div className="text-4xl font-bold text-center">PROJECTS</div>
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="flex mt-20 flex-column md:flex:row"
              >
                <div style={{ flex: "1 1" }}>
                  <div className="text-2xl font-bold">{proj.name}</div>
                  <div className="mt-5">{proj.description}</div>
                  <div className="mt-5">
                    {proj.link && (
                      <a
                        href={proj.link}
                        className="cta-btn cta-btn--hero mr-5"
                      >
                        See live
                      </a>
                    )}
                    <a href={proj.sourceCode} className="cta-btn cta-btn--hero">
                      Source Code
                    </a>
                  </div>
                </div>
                <div
                  style={{ width: "50%", flex: "1 1" }}
                  className="mt-10 ml-0 md:mt-0 md:ml-10"
                >
                  <Image
                    src={proj.image}
                    placeholder="blur"
                    style={{ maxWidth: "900px", hright: "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <section id="contact" className="text-center">
          {" "}
          <div class="container">
            {" "}
            <h2 class="section-title text-xl font-bold mb-5">Contact</h2>{" "}
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="mailto:maxwilliamfell@gmail.com@email.com"
            >
              Email Me!
            </a>{" "}
          </div>{" "}
        </section>

        <footer class="footer navbar-static-bottom text-center">
          <div class="container">
            <a rel="noreferrer" href="#top" class="back-to-top">
              Top
            </a>
            <div class="social-links">
              <a
                rel="noreferrer"
                href="https://github.com/MaxWFell"
                target="_blank"
              >
                GitHub
              </a>{" "}
            </div>
            <hr className="my-5" />{" "}
            <p class="footer__text">
              {" "}
              <a
                rel="noreferrer"
                href="https://github.com/MaxWFell"
                target="_blank"
              >
                Max Fell
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </footer>
      </main>
    </div>
  );
}
