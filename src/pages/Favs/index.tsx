import Articles from "../../components/Articles";

function Favs() {
  return (
    <div>
      <Articles renderOnlyFavs={true} />
    </div>
  );
}

export default Favs;
