import ItemTitle from "../Item/ItemTitle";
import ItemPicture from "../Item/ItemPicture";
import ItemDescription from "../Item/ItemDescription";

const AboutMe = (props) => {
  return (
    <aside>
      <ItemTitle itemTitle={props.title} />
      <ItemPicture itemPicture={props.picture} />
      <ItemDescription itemDescription={props.description} />
    </aside>
  );
};

export default AboutMe;
