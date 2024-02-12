import { VsCode } from "@/components/Icons";

import styles from "@/styles/posts.module.scss";

export default function Posts() {
  return (
    <>
      <div className={styles.articlesGrid}>
        <div className={styles.article}>
          <div className={styles.picture}>
            <VsCode />
          </div>
          <div className="d-flex align-center justify-between">
            <p className={styles.name}>Extensões que utilizo no vscode</p>
          </div>
          <p className={styles.date}>10 de jan. 2024</p>
        </div>
      </div>

      {/* <div className="d-flex justify-center">
            <Button design="primary">
              <span>Ver todos os posts</span>
              <span>Botão em manutenção</span>
            </Button>
          </div> */}
    </>
  );
}
