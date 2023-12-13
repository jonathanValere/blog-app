import AboutMe from "./AboutMe";
import abstractImage from "../../../assets/img/image-couleurs-vives.avif";

const SideContent = (props) => {
  return (
    <>
      <AboutMe
        title="About Me"
        picture={abstractImage}
        description="liquam eu dolor in orci bibendum interdum. Ut venenatis, ligula ut condimentum tincidunt, felis enim congue velit."
      />
    </>
  );
};

export default SideContent;
