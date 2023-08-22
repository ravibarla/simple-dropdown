function ListItems(props) {
  const { listItem, index, handleMouseOut } = props;
  return (
    <a
      key={index}
      className="dropdown-item"
      href={() => false}
      onClick={()=>handleMouseOut(listItem)}
    >
      {listItem}
    </a>
  );
}
export default ListItems;
