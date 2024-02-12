"use client";

import Image from "next/image";
import styles from "./page.module.scss";

import { Rancho } from "next/font/google";

import Menu from "@/components/Menu";

import classNames from "classnames/bind";
import ProjectDetails from "@/components/ProjectDetails";
import { useState } from "react";
const css = classNames.bind(styles);

const rochester = Rancho({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <header>
          <p className={css({ [rochester.className]: true, name: true })}></p>
        </header>
      </div>

      <main className={styles.main}>
        <section className={styles.aboutMeSection} id="aboutMe">
          <h1 className={styles.me}>
            <span className={styles.name}>Raphael Sella</span>
            Desenvolvedor{" "}
            <span className={styles.frontend}>
              front-end{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                viewBox="0 0 600 50"
              >
                <path
                  fill="#333"
                  d="M0.0 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 1.58a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM150.412 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM169.38 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM188.348 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM207.315 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM264.22 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM283.188 20.804a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM302.155 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM321.123 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM112.476 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476"
                ></path>
              </svg>
            </span>{" "}
            <br />
            apaixonado em criar interfaces{" "}
            <span
              className={css({ [rochester.className]: true, elegant: true })}
            >
              elegantes
            </span>
            <span className={styles.colon}>,</span>
            <br />
            <div className={styles.modern}>
              <span>modernas</span>
              <svg
                width="100%"
                height="4"
                viewBox="0 0 53 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M51.9 3C49 3 49 1 46.2 1c-2.8 0-2.8 2-5.7 2-2.8 0-2.8-2-5.7-2C32 1 32 3 29.1 3c-2.8 0-2.8-2-5.7-2-2.8 0-2.8 2-5.6 2S15 1 12.1 1C9.5 1 9.5 3 6.7 3 3.8 3 3.8 1 1 1"
                    stroke="#ff7fa7"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>{" "}
            e{" "}
            <div className={styles.intuitive}>
              <span>intuitivas</span>
              <span>intuitivas</span>
            </div>
            <span className={styles.dot}>.</span>
          </h1>
          <h2>
            Com 5 anos de experiência, trabalho atualmente com{" "}
            <strong>React</strong>, <strong>Next</strong> e{" "}
            <strong>Typescript</strong>.
          </h2>
        </section>

        <div className="d-flex justify-center">
          <svg
            height="4"
            viewBox="0 0 53 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M51.9 3C49 3 49 1 46.2 1c-2.8 0-2.8 2-5.7 2-2.8 0-2.8-2-5.7-2C32 1 32 3 29.1 3c-2.8 0-2.8-2-5.7-2-2.8 0-2.8 2-5.6 2S15 1 12.1 1C9.5 1 9.5 3 6.7 3 3.8 3 3.8 1 1 1"
                stroke="#333"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* <section className={styles.experiencesSection} id="experience">
          <h3 className={styles.titleSection} content="Experiências">
            Profissionais
          </h3>
          <p className={styles.subtitleSection}>
            As experiências profissionais que tive nesse meu tempo como
            desenvolvedor
          </p>

          <div className={styles.timelineContainer}>

          </div>
        </section> */}

        <section className={styles.projectsSection} id="projects">
          <h3 className={styles.titleSection} content="Últimos">
            Projetos
          </h3>
          <p className={styles.subtitleSection}>
            Projetos finalizados e alguns que estou trabalhando no momento
          </p>

          <div className={styles.projectsGrid}>
            <div className={styles.project} onClick={() => setOpen(true)}>
              <div className={styles.picture}>
                {/* <Image src={ProjectOne} alt="" layout="responsive" /> */}
                <p className={styles.details}>Visualizar</p>
              </div>
            </div>
          </div>

          {/* <div className="d-flex justify-center">
            <button className={css({ buttonPrimary: true, disabled: true })}>
              <span>Ver todos os projetos</span>
              <span>Botão em manutenção</span>
            </button>
          </div> */}
        </section>

        <div className="d-flex justify-center">
          <svg
            height="4"
            viewBox="0 0 53 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M51.9 3C49 3 49 1 46.2 1c-2.8 0-2.8 2-5.7 2-2.8 0-2.8-2-5.7-2C32 1 32 3 29.1 3c-2.8 0-2.8-2-5.7-2-2.8 0-2.8 2-5.6 2S15 1 12.1 1C9.5 1 9.5 3 6.7 3 3.8 3 3.8 1 1 1"
                stroke="#333"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        <section className={styles.blogSection} id="blog">
          <h3 className={styles.titleSection} content="Posts do">
            Blog
          </h3>
          <p className={styles.subtitleSection}>
            Aqui compartilho algumas das minhas experiências e conhecimentos
          </p>

          <div className={styles.articlesGrid}>
            <div className={styles.article}>
              <div className={styles.picture}>
                <svg viewBox="0 0 128 128">
                  <mask
                    id="a"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                      clip-rule="evenodd"
                    ></path>
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#0065A9"
                      d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                    ></path>
                    <g filter="url(#b)">
                      <path
                        fill="#007ACC"
                        d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                      ></path>
                    </g>
                    <g filter="url(#c)">
                      <path
                        fill="#1F9CF0"
                        d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                      ></path>
                    </g>
                    <path
                      fill="url(#d)"
                      fill-rule="evenodd"
                      d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                      clip-rule="evenodd"
                      opacity="0.25"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="b"
                      width="144.744"
                      height="113.408"
                      x="-8.41115"
                      y="22.5944"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <filter
                      id="c"
                      width="56.6667"
                      height="144.007"
                      x="79.6667"
                      y="-8.0035"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="overlay"
                        result="effect1_dropShadow_1_36"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_36"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="d"
                      x1="63.9222"
                      x2="63.9222"
                      y1="0.329902"
                      y2="127.67"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff"></stop>
                      <stop
                        offset="1"
                        stop-color="#fff"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="d-flex align-center justify-between">
                <p className={styles.name}>Extensões que tenho no meu vscode</p>
              </div>
              <p className={styles.date}>10 de jan. 2024</p>
            </div>
            <div className={styles.article}>
              <div className={styles.picture}>
                <svg viewBox="0 0 128 128">
                  <path
                    d="M107.346 2.012l-6.914.431.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65-5.485 4.162a.934.934 0 01-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 00-5.87 6.488l3.86 102.838a6.264 6.264 0 005.98 6.023l83.612 3.754a6.273 6.273 0 004.609-1.73 6.255 6.255 0 001.936-4.526V8.264a6.258 6.258 0 00-1.975-4.566 6.257 6.257 0 00-4.679-1.686zm-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319-2.204 1.713-18.62 2.88-18.62.443.346-9.3-3.817-9.707-6.13-9.707-2.198 0-5.899.662-5.899 5.644 0 12.288 31.69 11.625 31.69 36.424 0 13.95-11.335 21.655-25.791 21.655-14.92 0-27.957-6.036-26.485-26.963.578-2.457 19.545-1.873 19.545 0-.23 8.635 1.735 11.175 6.707 11.175 3.817 0 5.553-2.103 5.553-5.646 0-12.621-31.227-13.063-31.227-36.201 0-13.285 9.138-22.143 25.444-22.143z"
                    fill="#FF4785"
                  ></path>
                </svg>
              </div>
              <div className="d-flex align-center justify-between">
                <p className={styles.name}>Storybook, vale a pena utilizar?</p>
              </div>
              <p className={styles.date}>10 de jan. 2024</p>
            </div>
          </div>

          {/* <div className="d-flex justify-center">
            <button className={css({ buttonPrimary: true, disabled: true })}>
              <span>Ir para o blog</span>
              <span>Botão em manutenção</span>
            </button>
          </div> */}
        </section>
      </main>

      <div className={styles.footerContainer}>
        <footer>
          <p>Desenvolvido por Raphael Sella • {new Date().getFullYear()}</p>
        </footer>
      </div>

      <ProjectDetails open={open} onClose={() => setOpen(false)} />
      <Menu />
    </>
  );
}
