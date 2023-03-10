import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { sendContactForm } from "../../lib/api";
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";

import theme from "../../config/theme";
delete theme.styles.global

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

export default function ContactForm() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const toast = useToast();
  let { t } = useTranslation();

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
    await sendContactForm(values);
  };

  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Container maxW="450px" mt={12}>
        <Heading>Contact</Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            errorBorderColor="red.300"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          mb={5}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            rows={4}
            type="text"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Button
          variant="outline"
          colorScheme="white"
          disabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </Container>
    </ChakraProvider>
  );
}
