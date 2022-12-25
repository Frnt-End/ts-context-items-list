import { ListPageItem } from "../styles/ListPage.styles";

const Item = ({ item }: any) => {
  return (
    <ListPageItem>
      <img src={item.url} alt={`${item.breeds[0].name}`} />
      <h2>{`${item.breeds[0].name}`}</h2>
      <p>
        <span>&gt;</span>
      </p>
    </ListPageItem>
  );
};
export default Item;
