import ListItem from "./ListItem";

function Lists(props) {
  const { ListItem: dropdownItem } = props;

  return dropdownItem.map((item) => <ListItem listItem={item} />);
}
export default Lists;
