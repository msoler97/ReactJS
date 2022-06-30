
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";


export default function Category() {
  const { categoryId } = useParams();
  let title = ""

  {(() => {
    switch(categoryId) {
      case '1': return title = "Vinos tintos"
      case '2': return title = "Vinos blancos"
      case '3': return title = "Vinos rosados"
      case '4': return title = "Espumantes"
      default: return title = ""
    }
  })()}

  return (
    <div>
      <h1>{title}</h1>
      <ItemListContainer category={categoryId} />
    </div>
  );
}