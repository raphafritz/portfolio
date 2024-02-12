"use client";

import { useState } from "react";

import styles from "@/styles/projects.module.scss";

import ProjectDetails from "@/containers/ProjectDetails";
import Button from "@/components/Button";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.projectsGrid}>
        <div className={styles.project} onClick={() => setOpen(true)}>
          <div className={styles.picture}>
            {/* <Image src={ProjectOne} alt="" layout="responsive" /> */}
            <p className={styles.details}>Visualizar</p>
          </div>
        </div>
      </div>

      {/* <div className="d-flex justify-center">
        <Button design="primary">
          <span>Ver todos os projetos</span>
          <span>Botão em manutenção</span>
        </Button>
      </div> */}

      <ProjectDetails open={open} onClose={() => setOpen(false)} />
    </>
  );
}
