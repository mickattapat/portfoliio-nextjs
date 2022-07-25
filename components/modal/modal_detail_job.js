import { Modal } from "antd"
import SkeletonModal from "../skeleton/skeleton_modal"

const ModalDetailJob = (props) => {
  const { visible, data, closeModal } = props

  function setVisible(event) {
    closeModal(event)
  }

  return (
    <>
      <Modal
        title="Detail"
        style={{ fontWeight: "bold" }}
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
      >
        {data}
      </Modal>
    </>
  )
}

export default ModalDetailJob
