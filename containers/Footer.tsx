import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Desenvolvido por Raphael Sella • {new Date().getFullYear()}</p>
    </footer>
  );
}
