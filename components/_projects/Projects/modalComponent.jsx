import useTranslation from "next-translate/useTranslation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import { GiTechnoHeart } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";

export default function ModalComponent({
  title,
  creator,
  contribution,
  projectImage,
  alt,
  text,
  techs,
  link,
  openIt,
  closeIt,
}) {
  let { t } = useTranslation();

  return (
    <Modal isOpen={openIt} onClose={closeIt}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader size="lg">{title}</ModalHeader>
        <ModalCloseButton size="sm" />
        <Image
          className="mx-4"
          borderRadius="xl"
          src={projectImage}
          alt={alt}
        />
        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem className="flex justify-between" colSpan={2}>
              <Text color="tomato" fontSize="lg">
                Created by. . .
              </Text>
              <Text className="ml-2" fontSize="lg">
                {creator}
              </Text>
            </GridItem>
            <GridItem className="flex justify-between" colSpan={2}>
              <Text color="tomato" fontSize="lg">
                My contribution. . .
              </Text>
              <Text className="ml-2" fontSize="lg">
                {contribution}
              </Text>
            </GridItem>
          </Grid>
          <Divider className="my-2" />
          <Grid templateColumns="repeat(6, 1fr)" gap={2}>
            <GridItem colSpan={2}>
              <Heading as="h2" size="md">
                Tech-stack
              </Heading>
            </GridItem>
            <GridItem colSpan={4}>
              <Heading as="h2" size="md">
                Decription
              </Heading>
            </GridItem>
            <GridItem colSpan={2}>
              <List spacing={3}>
                <ListItem>
                  {techs.map((value, i) => {
                  return (
                    <ListItem key={i}>
                      <ListIcon as={GiTechnoHeart} color="green.500" />
                      {value}
                    </ListItem>
                  );
                })}
                </ListItem>
              </List>
            </GridItem>
            <GridItem colSpan={4}>
              <UnorderedList spacing={3}>
                {text.map((value, i) => {
                  return (
                    <ListItem key={i} color="green.100">
                      {value}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </GridItem>
          </Grid>
          <Button
            className="mb-2 float-right"
            rightIcon={<BsArrowThroughHeart />}
            colorScheme="orange"
            variant="solid"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t("projects:dev_button")}
            </a>
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
