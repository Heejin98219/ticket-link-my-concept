import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const SNS = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-evenly",
        position: "relative",
        margin: "5rem 0rem 5rem 0rem",
        float: "right",
      }}
    >
      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={faXTwitter} size="xl" />
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={faFacebook} size="xl" />
      </div>

      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </div>
      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={faTiktok} size="xl" />
      </div>
      <div
        style={{
          backgroundColor: "#ccc",
          display: "inline-block",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={faYoutube} size="xl" />
      </div>
    </div>
  );
};

export default SNS;
