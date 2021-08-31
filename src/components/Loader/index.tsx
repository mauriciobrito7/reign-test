import { LoaderContainer } from "./Loader.styles";
function Loader({ position = "absolute" }: AppComponents.LoaderProps) {
  return <LoaderContainer position={position} />;
}

export default Loader;
