function PictureCard({ bgLink, roundedness, height, width }) {
  height = height ?? "auto";
  width = width ?? "auto";
  roundedness = roundedness ?? "rounded-1xl";
  const classname = `${roundedness} ${height} ${width}`;
  return <img src={`${bgLink}`} className={classname} />;
}

export default PictureCard;
