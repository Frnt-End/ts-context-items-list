import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { ItemPageWrap, ItemPageContent } from "../styles/ItemPage.styles";

const ItemPage = ({ item }: any) => {
  let { details } = useParams();
  const navigato = useNavigate();

  let { currentItem } = useContext(AppContext);

  return (
    <ItemPageWrap>
      <ItemPageContent>
        <button onClick={() => navigato(-1)}>
          <span>⇐</span> Back
        </button>
        <img src={currentItem.url} alt={`${currentItem.breeds[0].name}`} />
        <h2>{`${currentItem.breeds[0].name}`}</h2>
        <p>
          Temperament: <span>{currentItem.breeds[0].temperament}</span>
        </p>
        <p>
          Life Span: <span>{currentItem.breeds[0].life_span}</span>
        </p>
        <p>
          Width: <span>{currentItem.width}</span>
        </p>
        <p>
          Height: <span>{currentItem.height}</span>
        </p>
      </ItemPageContent>
    </ItemPageWrap>
  );
};
export default ItemPage;
