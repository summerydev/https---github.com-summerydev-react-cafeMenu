import Modal from "./Modal";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = "http://localhost:3001/menu";
  const menu = useFetch(url);

  let handleAddItem = (item) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 5,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("메뉴가 등록되었습니다!");
      }
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome!</h1>
      </header>

      <aside className="sidebar">
        <button
          type="button"
          className="add-menu"
          onClick={() => setIsModalOpen(true)}
        >
          ADD MENU
        </button>
        {menu.map((menu) => (
          <span key={menu.name}>
            {menu.name}({menu.price}원)
          </span>
        ))}
      </aside>

      <section>
        <div className="container">
          {menu.map((menu) => (
            <div className="card" key={menu.name}>
              <img src={menu.image} alt={`${menu.name} image`} />
              <span>
                {menu.name}, {menu.price}원
              </span>
              <span>{menu.description}</span>
            </div>
          ))}
        </div>
      </section>

      <div hidden={!isModalOpen}>
        <Modal
          handleAddItem={handleAddItem}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default App;
