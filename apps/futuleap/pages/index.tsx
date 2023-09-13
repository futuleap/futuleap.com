import Head from 'next/head';
import RootLayout from '../app/layout';
import SocialButton from '../components/social-button';
import { EMAIL_PATH, INSTAGRAM_PATH, LINKEDIN_PATH } from '../components/icon-paths';
import styles from './index.module.scss';
import { useState } from 'react';

export default function Index() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const email = 'info@futuleap.com';
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  return (
    <RootLayout>
      <div className="container">
        <Head>
          <title>Futuleap</title>
          <meta name="description" content="Welcome to Futuleap!"/>
          <link rel="icon" href={`/favicon.ico`}/>
        </Head>

        <header>
          <figure className={styles.logo}>
            <img src={`/images/logo.png`} alt="Logo of Futuleap"/>
          </figure>
        </header>
        <main>
          <address aria-label="Contact FutuLeap at" className={styles.address}>
            <a aria-label="Send us an email at info@futuleap.com">
              <strong>info@futuleap.com</strong>
            </a>
            <button onClick={handleCopy} aria-label="Copy email address" className={styles.copyButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   style={{ color: isCopied ? '#5190e6' : '#00FBA9' }}>
                <path d="M9 13H4V4a2 2 0 0 1 2-2h5v2H6v8h3v-1z" fill="currentColor"></path>
                <path d="M3 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10z" stroke="currentColor"
                      strokeWidth="2"></path>
              </svg>
            </button>
          </address>

          <nav aria-label="Social Media Links" className={styles.socialLinks}>
            <SocialButton
              href="https://www.linkedin.com/company/futuleap/"
              label="LinkedIn"
              svgPathData={LINKEDIN_PATH}
              ariaLabel="Visit our LinkedIn profile"
            />
            <SocialButton
              href="https://instagram.com/futuleap"
              label="Instagram"
              svgPathData={INSTAGRAM_PATH}
              ariaLabel="Visit our Instagram profile"
            />
            <SocialButton
              href="mailto:info@futuleap.com"
              label="Email"
              svgPathData={EMAIL_PATH}
              ariaLabel="Send us an email"
            />
          </nav>
        </main>
      </div>
    </RootLayout>
  );
}


