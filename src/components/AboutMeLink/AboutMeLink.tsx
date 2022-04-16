import { ButtonLink } from '@components/ButtonLink'
import { aboutMeLink, arrowIcon, arrowIconPath } from './AboutMeLink.css'

export const AboutMeLink = () => {
  return (
    <ButtonLink href="/about" radius="full" className={aboutMeLink}>
      More about me
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={arrowIcon}
      >
        <path
          className={arrowIconPath}
          d="M3.3335 7.99967H12.6668M12.6668 7.99967L8.00016 3.33301M12.6668 7.99967L8.00016 12.6663"
          strokeWidth="1.3333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonLink>
  )
}
