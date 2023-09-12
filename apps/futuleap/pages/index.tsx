import styles from './index.module.scss';

import Head from 'next/head';
import RootLayout from '../app/layout';

export default function Index() {
  return (
    <RootLayout>
      <div className="container">
        <Head>
          <title>Futuleap</title>
          <meta name="description" content="Welcome to Futuleap, a future-forward company ready to do what it takes."/>
          <link rel="icon" href={`/favicon.ico`}/>
        </Head>

        <header>
          <figure className="logo">
            <img src={`/images/logo.png`} alt="Logo of Futuleap"/>
          </figure>
        </header>
        <main>
          <address aria-label="Contact FutuLeap at">
            <a href="mailto:info@futuleap.com" aria-label="Send us an email at info@futuleap.com">
              <strong>info@futuleap.com</strong>
            </a>
          </address>

          <nav aria-label="Social Media Links" className={styles.socialLinks}>
            <a href="https://www.linkedin.com/company/futuleap/" target="_blank" rel="noreferrer"
               aria-label="Visit our LinkedIn profile" className={styles.socialButton}>
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M2 0C0.9 0 0 0.9 0 2V22C0 23.1 0.9 24 2 24H22C23.1 24 24 23.1 24 22V2C24 0.9 23.1 0 22 0H2zM9 20H5V9H9V20zM7 7.5C5.6 7.5 4.5 6.4 4.5 5C4.5 3.6 5.6 2.5 7 2.5C8.4 2.5 9.5 3.6 9.5 5C9.5 6.4 8.4 7.5 7 7.5zM20 20H16V13.5C16 12.7 15.3 12 14.5 12H14.4C13.6 12 13 12.7 13 13.5V20H9V9H12.5V10.2H12.6C13.4 9.3 14.6 8.5 16 8.5C18.8 8.5 20 10.8 20 13.5V20z"></path>
              </svg>
              <span className="label">LinkedIn</span>
            </a>
            <a href="https://instagram.com/futuleap" target="_blank" rel="noreferrer"
               aria-label="Visit our Instagram profile" className={styles.socialButton}>
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M12 2.2c3.3 0 3.7 0 5 .1 1.2.1 1.9.5 2.3 1 .4.4.8 1.1 1 2.3.1 1.3.1 1.7.1 5s0 3.7-.1 5c-.1 1.2-.5 1.9-1 2.3-.4.4-1.1.8-2.3 1-1.3.1-1.7.1-5 .1s-3.7 0-5-.1c-1.2-.1-1.9-.5-2.3-1-.4-.4-.8-1.1-1-2.3-.1-1.3-.1-1.7-.1-5s0-3.7.1-5c.1-1.2.5-1.9 1-2.3.4-.4 1.1-.8 2.3-1 1.3-.1 1.7-.1 5-.1zm0-2.2c-3.4 0-3.8 0-5.1.1-1.7.1-2.9.7-3.9 1.7-1 1-1.6 2.2-1.7 3.9-.1 1.3-.1 1.7-.1 5.1s0 3.8.1 5.1c.1 1.7.7 2.9 1.7 3.9 1 1 2.2 1.6 3.9 1.7 1.3.1 1.7.1 5.1.1s3.8 0 5.1-.1c1.7-.1 2.9-.7 3.9-1.7 1-1 1.6-2.2 1.7-3.9.1-1.3.1-1.7.1-5.1s0-3.8-.1-5.1c-.1-1.7-.7-2.9-1.7-3.9-1-1-2.2-1.6-3.9-1.7-1.3-.1-1.7-.1-5.1-.1z"></path>
                <path fill="currentColor"
                      d="M12 6.3c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 9.5c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z"></path>
                <path fill="currentColor"
                      d="M18.7 6.3c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.6 1.2 1.2z"></path>
              </svg>
              <span className="label">Instagram</span>
            </a>
            <a href="mailto:info@futuleap.com" aria-label="Send us an email" className={styles.socialButton}>
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-1 2l-7 4.7L3 6h16z M3 8.3l7 4.7 7-4.7v8H3V8.3z"></path>
              </svg>
              <span className="label">Email</span>
            </a>
          </nav>
        </main>
      </div>
    </RootLayout>
  );
}


