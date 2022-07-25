import styles from "./home.module.css"
import Image from "next/image"

const HomePage = ({info}) => {

  return (
    <div className={styles.profile_content}>
      <div className={styles.profile_logo}>
        <Image
          className={styles.image}
          src={info.profileLogo}
          width="300px"
          height="300px"
          alt="profile"
        />
      </div>
      <div className={styles.profile_description}>
        <h1 className={styles.profile_name}>
          Hi, I&apos;m {info.firstName} 🤙🏻
        </h1>
        <h2 className={styles.profile_title}>I&apos;m {info.position}</h2>

        <ul className={styles.profile_subtitle}>
          {info.miniBio.map((miniBio, index) => {
            return (
              <li key={index} className={styles.profile_list}>
                {miniBio.emoji} &nbsp; {miniBio.text}
              </li>
            )
          })}
        </ul>

        <div className={styles.social_media}>
          {info.socials.map((social, index) => {
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={styles.social_icon}
              >
                {social.icon}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage
