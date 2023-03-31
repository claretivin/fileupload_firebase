import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "./firebase";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import Button from "react-bootstrap/Button";

function App() {
  const [file, setfile] = useState();

  const handleupload = async (e) => {
    // e.preventDefault();
    const path = `/images/${file.name}`;
    const storageRef = ref(storage, path);
    uploadBytes(storageRef, file).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="row">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setfile(e.target.files[0]);
            }}
          />
        </Form.Group>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            handleupload();
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
