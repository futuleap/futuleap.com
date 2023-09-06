import styles from './index.module.scss';
import Head from 'next/head';
import RootLayout from '../../app/layout';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AboutProps {}

export function About(props: AboutProps) {
  const employees = [
    { id: 1, name: 'Mihkel Kasepuu', jobTitle: 'CEO, Co-Founder', linkedInUrl: 'https://www.linkedin.com/in/mihkel-kasepuu-4094b098/', email: 'mihkel.kasepuu@futuleap.com',  image: '/images/mihkel_kasepuu.jpeg', description: 'Allergic to nuts.' },
    { id: 2, name: 'Kärt Palm', jobTitle: 'COO, Co-Founder', linkedInUrl: 'https://www.linkedin.com/in/k%C3%A4rt-palm-63002911/', email: 'kart.palm@futuleap.com',  image: '/images/kart_palm.jpeg', description: 'Nothing is impossible.' },
    { id: 3, name: 'Kaarel Raspel',  jobTitle: 'CTO, Co-Founder', linkedInUrl: 'https://www.linkedin.com/in/kaarel-raspel-720bb343/', email: 'kaarel.raspel@futuleap.com',  image: '/images/kaarel_raspel.jpeg', description: 'An enthusiast of e-Governance on a journey for becoming a protagonist.' },
    { id: 4, name: 'Maksim Gorb',  jobTitle: 'Co-Founder', linkedInUrl: 'https://www.linkedin.com/in/maksimgo/', email: 'maksim.gorb@futuleap.com',  image: '/images/maksim_gorb.jpeg', description: 'Strong believer in growth through teamwork. Focus on quality and always willing to take risks for big achievements.' },
    { id: 5, name: 'Siim Veskilt',  jobTitle: 'Co-Founder', linkedInUrl: 'https://www.linkedin.com/in/siim-veskilt-936656145/', email: 'siim.veskilt@futuleap.com',  image: '/images/siim_veskilt.jpeg', description: 'Expert in incorporating design systems, mono-repositories and micro-frontends.' },
  ];

  return (
    <RootLayout>
      <div className="container">
        <Head>
          <title>Team - Futuleap</title>
          <meta name="description" content="Learn more about the team behind Futuleap." />
        </Head>

        <header>
          <figure className="logo">
            <img src={`/images/textonly_nobuffer-removebg.png`} alt="Logo of FutuLeap"/>
          </figure>

          <h1 className={styles.title}></h1>
        </header>

        <main>
          <section className={styles.employeeList}>
            {employees.map(employee => (
              <div key={employee.id} className={styles.employeeCard}>
                <img src={employee.image} alt={`Picture of ${employee.name}`} />
                <p className={styles.jobTitle}>{employee.jobTitle}</p>
                <h2>{employee.name}</h2>
                <div className={styles.socialLinks}>
                  <a href={employee.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialButton}>
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor"
                            d="M2 0C0.9 0 0 0.9 0 2V22C0 23.1 0.9 24 2 24H22C23.1 24 24 23.1 24 22V2C24 0.9 23.1 0 22 0H2zM9 20H5V9H9V20zM7 7.5C5.6 7.5 4.5 6.4 4.5 5C4.5 3.6 5.6 2.5 7 2.5C8.4 2.5 9.5 3.6 9.5 5C9.5 6.4 8.4 7.5 7 7.5zM20 20H16V13.5C16 12.7 15.3 12 14.5 12H14.4C13.6 12 13 12.7 13 13.5V20H9V9H12.5V10.2H12.6C13.4 9.3 14.6 8.5 16 8.5C18.8 8.5 20 10.8 20 13.5V20z"></path>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href={`mailto:${employee.email}`} aria-label="Email" className={styles.socialButton}>
                    <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor"
                            d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-1 2l-7 4.7L3 6h16z M3 8.3l7 4.7 7-4.7v8H3V8.3z"></path>
                    </svg>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

export default About;
