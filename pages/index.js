import styles from "../styles/Home.module.css";
import { useWeb3 } from "@3rdweb/hooks";

export default function Home() {
  const { address, chainIds, connectWallet } = useWeb3();

  // if (address) {
  //   return <button className={styles.mainBtn}>Connected to: {address}</button>;
  // } else {
  //   return (
  //     <button
  //       className={styles.mainBtn}
  //       onClick={() => connectWallet("injected")}
  //     >
  //       Connect Wallet
  //     </button>
  //   );
  // }
  return (
    <div className={styles.container}>
      <main className={`${styles.main} ${styles.mainBg}`}>
        <header className={styles.mainHead}>
          <button
            className={`${styles.mainBtn} ${styles.mobileHid}`}
            style={{ visibility: "hidden" }}
          >
            Connect Wallet
          </button>
          <h1
            className={styles.logoHead}
            style={{ fontFamily: "montserrat", color: "aliceblue" }}
          >
            DAOCORATIONS
          </h1>
          {address ? (
            <button className={styles.mainBtn}>Connected to: {address}</button>
          ) : (
            <button
              className={styles.mainBtn}
              onClick={() => connectWallet("injected")}
            >
              Connect Wallet
            </button>
          )}
          {/* <button className={styles.mainBtn}>Connect Wallet</button> */}
        </header>
        <div className={styles.mainBody}>
          <h1 className={styles.bodyHead}>Coming Soon!!</h1>
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.socials}>
            <a href="https://twitter.com/DAOcorations" target="_blank">
              <i className={styles.socialIcon} style={{ fontSize: "40px" }}></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
