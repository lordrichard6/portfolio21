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

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

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
  };

  return (
    <Container maxW="450px" mt={12}>
      <h1 className="text-4xl font-semibold mt-6 mb-2/ text-center">
        Send me a quick message
      </h1>
      {error && (
        <Text className="text-center" color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <div className="flex items-baseline">
          <FormLabel>Name</FormLabel>
          <FormErrorMessage mt={0}>Required</FormErrorMessage>
        </div>
        <Input
          errorBorderColor="red.300"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {/* <FormErrorMessage>Required</FormErrorMessage> */}
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <div className="flex items-baseline">
          <FormLabel>Email</FormLabel>
          <FormErrorMessage mt={0}>Required</FormErrorMessage>
        </div>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.subject && !values.subject}
        mb={5}
      >
        <div className="flex items-baseline">
          <FormLabel>Subject</FormLabel>
          <FormErrorMessage mt={0}>Required</FormErrorMessage>
        </div>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <div className="flex items-baseline">
          <FormLabel>Message</FormLabel>
          <FormErrorMessage mt={0}>Required</FormErrorMessage>
        </div>
        <Textarea
          rows={4}
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </FormControl>
      <div className="flex justify-center">
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
      </div>
    </Container>
  );
}
