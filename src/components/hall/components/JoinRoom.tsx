import { Grid, Heading } from "@chakra-ui/react";
import SpokerButton from "components/ui/SpokerButton";
import SpokerInput from "components/ui/SpokerInput";
import SpokerWrapperGrid from "components/ui/SpokerWrapperGrid";
import { useRouter } from "next/router";

const JoinRoom = () => {
  const router = useRouter();

  return (
    <SpokerWrapperGrid gap={8} backgroundColor="orange.500" color="white">
      <Heading size="lg">Or Join Party</Heading>

      <Grid gap={4}>
        <SpokerInput
          label="Room ID"
          placeholder="quick-brown-fox"
          _placeholder={{ color: "orange.200" }}
        />
      </Grid>

      <SpokerButton
        alignSelf="flex-end"
        backgroundColor="black"
        _hover={{ backgroundColor: "orange.400" }}
        onClick={() => router.push("/room")}
      >
        Let Me in!
      </SpokerButton>
    </SpokerWrapperGrid>
  );
};

export default JoinRoom;
