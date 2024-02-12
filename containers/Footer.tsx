import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <p>Desenvolvido por Raphael Sella • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
