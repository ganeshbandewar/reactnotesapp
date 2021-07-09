import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Textplace from "./Textplace";
function App() {
  const [notes1, setNotes] = useState([]);

  function add(notenew) {
    setNotes((prevNotes) => {
      return [...prevNotes, notenew];
    });
  }

  function deletet(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Textplace onAdd={add} />
      {notes1.map((item, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deletet}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

