import { useState } from "react";


export default function Modal({ handleAddItem, isModalOpen,setIsModalOpen}) {
  const url = "http://localhost:3001/menu";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, price, description, image);
    handleAddItem({ name, price, description, image });
    setIsModalOpen(false);
    

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: 5,
    //     name: name,
    //     price: price,
    //     description: description,
    //     image: image,
    //   }),
    // }).then((res) => {
    //   if (res.ok) {
    //     alert("메뉴가 등록되었습니다!");
    //   }
    // });
  }

  return (
    <div hidden={!isModalOpen}>
      <form onSubmit={handleSubmit} className="modal">
        <span
          className="closeModal"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </span>
        <span>메뉴 이름</span>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ex) 아메리카노"
        />
        <span>가격</span>
        <input
          id="price"
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="ex) 4000"
        />
        <span>내용</span>
        <input
          id="description"
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="ex) 고소한 원두를 사용했어요."
        />
        <span>이미지</span>
        <input
          id="image"
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL"
        />

        <button type="submit" className="submit-button">
          메뉴 등록
        </button>
      </form>
    </div>
  );
}
