import "./styles.css";
import prototypeImage1 from "./prototype1.jpeg";
import prototypeImage2 from "./prototype2.jpeg";

import iflix from "./iflix.jpg";
import netflix from "./netflix.jpg";

export default function App() {
  return (
    <div className="App" style={{ marginRight: "auto" }}>
      <h1>Group 2</h1>
      <div>
        <h3>Members</h3>
        <ul>
          <li>Osaid Shah (bscs17104)</li>
          <li>Hamza Ahmed (bscs17023)</li>
          <li>Saad Waseem (bscs17030)</li>
        </ul>
      </div>
      <div>
        <h3>
          <strong>Title: </strong>DogeTv
        </h3>
      </div>
      <div>
        <h3>
          <strong>Description</strong>
        </h3>
        <p>
          A take on online streaming that tries to fix our personal grievances
          with the existing streaming services and tries to present an
          alternative that is more accessible to demographics in developing
          countries. We want to create a platform that bridges the gap between
          the easily accessible television devices such as smartTV in order to
          make the transition easier for people less versed (or resistant) to
          changes in technology.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
        <div>
          <h4>Orginal Designs </h4>
          <div>(taken from currently</div>
          <div>popular streaming options)</div>
          <div>
            <img src={iflix} style={{ width: "500px", height: "500px" }}></img>
          </div>
          <div>
            <img
              src={netflix}
              style={{ width: "500px", height: "500px" }}
            ></img>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "auto" }}
        >
          <h4>Proposed Design</h4>
          <div style={{ marginTop: "5vh" }}>
            <img
              src={prototypeImage1}
              style={{ width: "500px", height: "500px" }}
            ></img>
          </div>
          <div>
            <img
              src={prototypeImage2}
              style={{ width: "500px", height: "500px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
