/* eslint-disable @next/next/no-img-element */
import styles from "./port.module.css"
import ModalDetailJob from "../modal/modal_detail_job"

import { useState } from "react"
import Image from "next/image"

const PortfolioPage = ({ info }) => {
  const [visible, setVisible] = useState(false)
  const [details, setDetail] = useState(null)

  function openModal(item) {
    const description = () => {
      if (item.description) {
        return <p>{item.description}</p>
      }
    }
    const detail = item.details.map((value, index) => {
      return (
        <p key={index} style={{ fontWeight: "normal" }}>
          - {value}
        </p>
      )
    })

    const data = () => {
      return (
        <>
          {description()}
          {detail}
        </>
      )
    }

    setDetail(data)
    setVisible(true)
  }

  function closeModal() {
    setDetail(null)
    setVisible(false)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.port_contianer}>
          {info.portfolio.map((item, index) => {
            return (
              <div
                style={{ textAlign: "center", margin: "1.5rem" }}
                key={index}
              >
                <div className={styles.port_list}>
                  <Image
                    className={styles.img_port}
                    src={item.image}
                    onClick={() => openModal(item)}
                    alt="port"
                    loading="lazy"
                  />
                </div>
                {item.title}
              </div>
            )
          })}
        </div>
        <div>
          <ModalDetailJob
            visible={visible}
            data={details}
            closeModal={closeModal}
          />
        </div>
      </div>
    </>
  )
}

export default PortfolioPage
