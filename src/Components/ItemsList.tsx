import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import Item from "./Item";
import {
  PaginationBtns,
  ListContainer,
  WrapPaginationBtns,
  Container,
} from "../styles/ListPage.styles";

function ItemsList() {
  let { theData, pageNum, setPageNum, setCurrentItem } = useContext(AppContext);

  const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleClick({ item }: any) {
    setCurrentItem(item);
  }

  return (
    <Container>
      <WrapPaginationBtns>
        <PaginationBtns>
          <button
            onClick={() => setPageNum((pageNum: number) => pageNum - 1)}
            disabled={pageNum === 1 ? true : false}
          >
            &lt;&lt;
          </button>

          {arrNum.map((num) => (
            <button
              key={num}
              onClick={() => setPageNum(num)}
              disabled={pageNum === num ? true : false}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPageNum((pageNum: number) => pageNum + 1)}
            disabled={pageNum === 10 ? true : false}
          >
            &gt;&gt;
          </button>
        </PaginationBtns>
      </WrapPaginationBtns>

      <ListContainer>
        <ul>
          {theData.map((item: any) => (
            <li key={item.id} onClick={() => handleClick({ item })}>
              <Link to="/:details">
                <Item item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
}
export default ItemsList;
