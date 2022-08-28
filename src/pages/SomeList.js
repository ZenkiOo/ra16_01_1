import { List } from "../components/List";
import "../css/some-list.css";

const SomeList = () => {
  const items = ["1", "2", "3", "4"];

  return <section className="items">{<List items={items} />}</section>;
};
export { SomeList };
