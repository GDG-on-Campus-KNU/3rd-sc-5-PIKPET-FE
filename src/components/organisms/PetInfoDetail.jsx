import Img from "@components/atoms/Img";
import Container from "@styles/Container";
import Text from "@styles/Text";

const PetInfoDetail = ({
  petId,
  img,
  name,
  interested,
  breed,
  age,
  gender,
  shelter,
  ...rest
}) => {
  return (
    <Container paddingY="0" paddingX="0">
      <Img src={null} size="Big" />
      <div>
        <Text fontSize="20px" fontWeight="700">
          {name}
        </Text>
      </div>
    </Container>
  );
};

export default PetInfoDetail;
