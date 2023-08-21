import ListItem from "./ListItem";

function Lists(props) {
  const { ListItem: dropdownItem } = props;

  return dropdownItem.map((item, index) => (
    <li key={index}>
      <ListItem listItem={item} index={index} />
    </li>
  ));
}
export default Lists;
