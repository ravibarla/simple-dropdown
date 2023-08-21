function ListItems(props) {
  const { listItem } = props;
  return (
    <a className="dropdown-item" href={() => false}>
      {listItem}
    </a>
  );
}
export default ListItems;
