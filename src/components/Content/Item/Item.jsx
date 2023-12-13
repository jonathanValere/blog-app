import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <article>
      <ItemTitle itemTitle={props.title} />
      <ItemSubtitle itemSubtitle={props.subtitle} />
      <ItemPicture itemPicture={props.picture} />
      <ItemDescription itemDescription={props.description} />
    </article>
  );
};

export default Item;
