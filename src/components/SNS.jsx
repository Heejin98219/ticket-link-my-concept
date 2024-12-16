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
    <div>
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTiktok} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
};

export default SNS;
