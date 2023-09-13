import Head from 'next/head';
import RootLayout from '../app/layout';
import SocialButton from '../components/social-button';
import { EMAIL_PATH, INSTAGRAM_PATH, LINKEDIN_PATH } from '../components/icon-paths';
import styles from './index.module.scss';

export default function Index() {
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
            <a href="mailto:info@futuleap.com" aria-label="Send us an email at info@futuleap.com">
              <strong>info@futuleap.com</strong>
            </a>
          </address>

          <nav aria-label="Social Media Links" className="socialLinks">
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


