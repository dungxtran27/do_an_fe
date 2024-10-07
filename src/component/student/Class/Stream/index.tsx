import { Button, Divider, Image, Input } from "antd";
import { Typography } from "antd";
import { FaRegPaperPlane } from "react-icons/fa6";
import CommentModal from "../../../modal/commentModal";
import { useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
const { Text } = Typography;
const Stream = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const streams = [
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content:
        "Trước thời kỳ Đổi mới, Việt Nam đối mặt với nhiều khó khăn nghiêm trọng như nền kinh tế trì trệ, lạm phát cao, thiếu lương thực, tình trạng bao cấp, sản xuất kém hiệu quả, và sự cô lập về kinh tế. Những thách thức này làm đời sống nhân dân gặp nhiều khó khăn, khiến sự phát triển xã hội bị đình trệ Sau thời kỳ Đổi mới (1986), các cải cách toàn diện đã giúp mở cửa nền kinh tế, thúc đẩy sản xuất hàng hóa, tạo điều kiện cho kinh tế tư nhân phát triển, thu hút đầu tư nước ngoài và tăng trưởng kinh tế bền vững. Đổi mới cũng giúp cải thiện đời sống nhân dân và ổn định xã hội.",
      comment: {
        username: "dungmuahaha",
        avatar:
          "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
        date: "22 feb, 2024",
        content: "Trước thời kỳ Đổi mới, Việt Nam đố.",
      },
    },
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content:
        "Trước thời kỳ Đổi mới, Việt Nam đối mặt với nhiều khó khăn nghiêm trọng như nền kinh tế trì trệ, lạm phát cao, thiếu lương thực, tình trạng bao cấp, sản xuất kém hiệu quả, và sự cô lập về kinh tế. Những thách thức này làm đời sống nhân dân gặp nhiều khó khăn, khiến sự phát triển xã hội bị đình trệ Sau thời kỳ Đổi mới (1986), các cải cách toàn diện đã giúp mở cửa nền kinh tế, thúc đẩy sản xuất hàng hóa, tạo điều kiện cho kinh tế tư nhân phát triển, thu hút đầu tư nước ngoài và tăng trưởng kinh tế bền vững. Đổi mới cũng giúp cải thiện đời sống nhân dân và ổn định xã hội.",
      comment: {
        username: "dungmuahaha",
        avatar:
          "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
        date: "22 feb, 2024",
        content: "Trước thời kỳ Đổi mới, Việt Nam đố.",
      },
    },
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content:
        "Trước thời kỳ Đổi mới, Việt Nam đối mặt với nhiều khó khăn nghiêm trọng như nền kinh tế trì trệ, lạm phát cao, thiếu lương thực, tình trạng bao cấp, sản xuất kém hiệu quả, và sự cô lập về kinh tế. Những thách thức này làm đời sống nhân dân gặp nhiều khó khăn, khiến sự phát triển xã hội bị đình trệ Sau thời kỳ Đổi mới (1986), các cải cách toàn diện đã giúp mở cửa nền kinh tế, thúc đẩy sản xuất hàng hóa, tạo điều kiện cho kinh tế tư nhân phát triển, thu hút đầu tư nước ngoài và tăng trưởng kinh tế bền vững. Đổi mới cũng giúp cải thiện đời sống nhân dân và ổn định xã hội.",
      comment: {
        username: "dungmuahaha",
        avatar:
          "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
        date: "22 feb, 2024",
        content: "Trước thời kỳ Đổi mới, Việt Nam đố.",
      },
    },
  ];
  const comments = [
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content: "Trước thời kỳ Đổi mới, Việt Nam đố.",
    },
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content: " trệ, lạm phát cao, thiếu lương thực, tình",
    },
    {
      username: "dungmuahaha",
      avatar:
        "https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg",
      date: "22 feb, 2024",
      content:
        "hời kỳ Đổi mới, Việt Nam đối mặt với nhiều khó khăn nghiêm trọng như nền kinh tế trì trệ, lạm phát cao, thiếu lương thực, tình trạng bao cấp, sản xuất kém hiệu quả, và sự cô lập về kinh tế. Những thách thức này làm đời sống nhân dân gặp nhiều khó khăn, khiến sự phát triển xã hội bị đình trệ Sau thời kỳ Đổi mới (1986), các cải cách toàn diện đã giúp mở cửa nền kinh tế, thúc đẩy sản xuất hàng hóa, tạo điều kiện cho kinh tế tư nhân phát triển, thu hút đầu tư nước ngoài và tăng trưởng kinh tế bền vững. Đổi mới cũng giúp cải th",
    },
  ];
  return (
    <>
      {streams.map((s) => (
        <div className=" bg-white rounded-md pt-2 pl-5 pr-5 pb-5 mt-5 border-[1px] border-solid border-slate-400">
          <div className="stream_des  ">
            <div className="stream_header flex pb-2">
              <Image
                width={"40px"}
                preview={false}
                className="rounded-full"
                src={s.avatar}
              />
              <div className="stream_user pl-3">
                <p className="stream_username mb-0 font-semibold">
                  {s.username}
                </p>
                <Text
                  type="secondary"
                  className=" stream_date  text-[0.65rem] "
                >
                  {s.date}
                </Text>
              </div>
            </div>
            <div className="stream_content">{s.content}</div>
          </div>
          <hr className="mt-3" />
          <div className="tream_cmt">
            <Button type="text" className="" onClick={showModal}>
              {comments.length} comments{" "}
            </Button>
            <div className="stream_cmt_body pt-3">
              <div className="flex">
                <Image
                  preview={false}
                  className={classNames(
                    "w-[40px] rounded-full object-cover object-center aspect-square",
                    style.stream_cmt_avt
                  )}
                  src={s.comment.avatar}
                />
                <div className="ml-3">
                  <div className="flex j">
                    <div className="font-semibold">{s.comment.username}</div>
                    <Text
                      type="secondary"
                      className="stream_date text-[0.7rem] ml-2"
                    >
                      {s.comment.date}
                    </Text>
                  </div>
                  <div className="text-sm">{s.comment.content}</div>
                </div>
              </div>
            </div>

            <div className="flex">
              <Image
                width={"40px"}
                preview={false}
                className="rounded-full"
                src="https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg"
              />
              <Input className="ml-4 mr-2" />

              <FaRegPaperPlane size={25} />
            </div>
          </div>
        </div>
      ))}
      <CommentModal
        closeModal={closeModal}
        comments={comments}
        open={isModalOpen}
      />
    </>
  );
};
export default Stream;
