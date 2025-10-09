
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
              <div>
                  <h2>Список сотрудников</h2>
                  <br/>
                  <h3>Fast API, SQL, React, NextJS, Typescript, antd</h3>
                  <br />
                  <h4>CRUD операции и другая функциональность</h4>
        </div>
      </main>
      <footer className={styles.footer}>       
      </footer>
    </div>
  );
}
