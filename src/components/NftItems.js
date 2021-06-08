const NftItem = (props) => {
  return (
    <div className="listElements" key={props.id}>
      <img className="listImages" src={props.image} />
      <p>{props.name}</p>

      <p className="priice">{props.price}</p>
    </div>
  );
};
export default NftItem;
