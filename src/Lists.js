import ListItem from "./ListItem";

function Lists(props) {
  const { ListItem: dropdownItem,handleMouseOut } = props;

  return dropdownItem.map((item, index) => (
   
      <ListItem listItem={item} index={index} handleMouseOut={handleMouseOut}/>
    
  ));
}
export default Lists;
