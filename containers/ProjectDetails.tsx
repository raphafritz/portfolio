"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import styles from "@/styles/project-details.module.scss";

import classNames from "classnames/bind";
import { ArrowRight, GitHub, LinkedIn, Wave } from "../components/Icons";
import Button from "../components/Button";
const css = classNames.bind(styles);

import ProjectOne from "@/public/068e2067120026688b6e8bae5cd3a06e.png";

interface ProjectDetailsProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectDetails({ open, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    const body = document.body;

    if (open) body.style.overflowY = "hidden";
    else body.style.overflowY = "auto";
  }, [open]);

  return (
    <div className={css({ menu: true, open: open })}>
      <div className={styles.fade} onClick={onClose} />
      <div className={styles.drawer}>
        <div className={styles.picture}>
          <Image src={ProjectOne} alt="" layout="responsive" />
        </div>
        <div className={styles.details}>
          <p className={styles.name}>Adopet</p>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <div className={styles.techs}>React, Typescript, Sass</div>

          <div className="d-flex justify-center">
            <Wave />
          </div>

          <div className="d-flex flex-1 justify-between align-end">
            <div className="d-flex align-center gap-15">
              <Button design="icon" ariaLabel="LinkedIn">
                <a href="#" target="_blank">
                  <LinkedIn />
                </a>
              </Button>
              <Button design="icon" ariaLabel="GitHub">
                <a href="#" target="_blank">
                  <GitHub />
                </a>
              </Button>
            </div>
            <Button design="underline">
              <span>Ver aplicação</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
