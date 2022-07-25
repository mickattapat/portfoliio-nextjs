import styles from "./about.module.css"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

import Terminal from "../terminal/terminal"
import ModalDetailJob from "../modal/modal_detail_job"

const AboutPage = ({ info }) => {
  const [visible, setVisible] = useState(false)

  const abouMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>{" "}
          cat &nbsp;about-attapat
        </p>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>
        </p>
        <p>{info.bio}</p>
      </>
    )
  }

  const skillsMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>{" "}
          cd &nbsp;frontend/skills/tools && ls
        </p>
        <ul className={styles.detail_skills}>
          <li style={{ color: "#27c93f" }}>Intermediate</li>
          {info.skills.Intermediate_FE.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>{" "}
          cd &nbsp; backend/skills/tools && ls
        </p>
        <ul className={styles.detail_skills}>
          <li style={{ color: "#27c93f" }}>Intermediate</li>
          {info.skills.Intermediate_BE.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
        <ul className={styles.detail_skills}>
          <li style={{ color: "#27c93f" }}>Basic</li>
          {info.skills.Intermediate_BE_Basic.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </>
    )
  }

  const hobbiesMe = () => {
    return (
      <>
        <p>
          <span style={{ color: "rgb(0, 255, 164)" }}>
            attapatkayasa@attapat ~ %
          </span>{" "}
          cd &nbsp;hobbies/interests && ls
        </p>
        <ul className={styles.detail_hoobies}>
          {info.hobbies.map((hobbie, index) => {
            return (
              <li key={index}>
                {hobbie.emoji} &nbsp;{hobbie.label}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const certificate = info.certificate.map((value, index) => {
    return (
      <p key={index}>
        <Image  src={value.img} alt="certificate" loading="lazy"></Image>
      </p>
      
    )
  })

  function openModal() {
    setVisible(true)
  }

  function closeModal() {
    setVisible(false)
  }

  return (
    <>
      <div className={styles.bottom_footer}>
        <div className={styles.download}>
          <div className={styles.download_cv}>
            <a
              onClick={() => {
                openModal()
              }}
            >
              Open Certificate.
            </a>
            <Link href="https://drive.google.com/file/d/1BXyHbYlv2H1ndx43YISoyNGsQ4bpQc8R/view?usp=sharing">
              <a target="_blank">Open CV.</a>
            </Link>
          </div>
        </div>
        <Terminal detail={abouMe()} />
        <Terminal detail={skillsMe()} />
        <Terminal detail={hobbiesMe()} />
      </div>
      <div>
        <ModalDetailJob
          visible={visible}
          data={certificate}
          closeModal={closeModal}
        />
      </div>
    </>
  )
}

export default AboutPage
