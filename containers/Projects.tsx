"use client";

import { useState } from "react";

import styles from "@/styles/projects.module.scss";

import ProjectDetails from "@/containers/ProjectDetails";
import Button from "@/components/Button";

import ProjectOne from "@/public/068e2067120026688b6e8bae5cd3a06e.png";
import Image from "next/image";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.projectsGrid}>
        <div className={styles.project} onClick={() => setOpen(true)}>
          <div className={styles.picture}>
            <Image src={ProjectOne} alt="" layout="responsive" />
          </div>
          <div className={styles.details}>
            <p className={styles.name}>Adopet</p>
            <p className={styles.resume}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
          </div>
        </div>
        <div className={styles.project} onClick={() => setOpen(true)}>
          <div className={styles.picture}>
            <Image src={ProjectOne} alt="" layout="responsive" />
          </div>
          <div className={styles.details}>
            <p className={styles.name}>Adopet</p>
          </div>
        </div>
      </div>

      <ProjectDetails open={open} onClose={() => setOpen(false)} />
    </>
  );
}
