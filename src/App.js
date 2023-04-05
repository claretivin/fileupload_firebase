import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "./firebase";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import Button from "react-bootstrap/Button";

function App() {
  const [file, setfile] = useState([]);

  let chossenfiles;

  const handleupload = async (files) => {
    // e.preventDefault();
    const uploaded = [...file];
    files?.some((files) => {
      console.log(files);
      const path = `/images/${files.name}`;
      console.log(path);
      const storageRef = ref(storage, path);
      uploadBytes(storageRef, files).then((response) => {
        console.log(response);
      });
      uploaded.push(files);
    });
    setfile(uploaded);
  };

  return (
    <div className="App">
      <div className="row">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={(e) => {
              // setfile(e.target.files);
              chossenfiles = Array.prototype.slice.call(e.target.files);
              console.log(chossenfiles);
            }}
          />
        </Form.Group>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            handleupload(chossenfiles);
          }}
          variant="secondary"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

export default App;
