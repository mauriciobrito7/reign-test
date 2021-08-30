import { SkeletonContainer, SkeletonShape } from "./Skeleton.styles";

function Skeleton({ numberOfShapes = 10 }: AppComponents.SkeletonProps) {
  return (
    <SkeletonContainer>
      {[...Array(numberOfShapes)].map((x, index) => (
        <SkeletonShape key={index} />
      ))}
    </SkeletonContainer>
  );
}

export default Skeleton;
