import Item from "./Item/Item";
import abstractImage from "../../assets/img/image-couleurs-vives.avif";

const MainContent = () => {
  return (
    <section>
      <Item
        title="Title heading 1"
        subtitle="Title description"
        picture={abstractImage}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium sapien auctor, tempor nisl nec, dapibus purus. Sed id ante ligula. Vivamus mollis arcu vitae vestibulum tincidunt. Ut et purus a libero posuere tempus ac non metus. Sed id sapien ultrices, fermentum lectus sit amet, vestibulum libero. Sed rhoncus, leo et sagittis ultrices, odio purus mattis lectus, vitae molestie neque ipsum sed nulla. Aenean volutpat ipsum et magna lacinia placerat. Integer quis interdum elit. Etiam ultrices ultrices diam, nec volutpat justo facilisis nec. Cras molestie dolor et mi fringilla, ac venenatis orci tincidunt. Aliquam eu dolor in orci bibendum interdum. Ut venenatis, ligula ut condimentum tincidunt, felis enim congue velit, vel efficitur justo magna et velit."
      />
      <Item
        title="Title heading 2"
        subtitle="Title description"
        picture={abstractImage}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium sapien auctor, tempor nisl nec, dapibus purus. Sed id ante ligula. Vivamus mollis arcu vitae vestibulum tincidunt. Ut et purus a libero posuere tempus ac non metus. Sed id sapien ultrices, fermentum lectus sit amet, vestibulum libero. Sed rhoncus, leo et sagittis ultrices, odio purus mattis lectus, vitae molestie neque ipsum sed nulla. Aenean volutpat ipsum et magna lacinia placerat. Integer quis interdum elit. Etiam ultrices ultrices diam, nec volutpat justo facilisis nec."
      />
    </section>
  );
};

export default MainContent;
