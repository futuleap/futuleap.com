import styles from './social-button.module.scss';

export interface SocialButtonProps {
  href: string;
  label: string;
  svgPathData: string[];
  ariaLabel: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, svgPathData, ariaLabel }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel} className={styles.socialButton}>
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {svgPathData.map((path, index) => (
          <path key={index} fill="currentColor" d={path}></path>
        ))}
      </svg>
      <span className="label">{label}</span>
    </a>
  );
}

export default SocialButton;
