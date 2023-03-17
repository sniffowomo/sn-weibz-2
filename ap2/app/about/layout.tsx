import styles from "./styles.module.css";

// per page metadata
export const metadata = {
  title: "👃",
  description: "WomanSuckSniff",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
