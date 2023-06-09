import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { sendContactForm } from "../../lib/api";
import { TextAnimationLetter } from "../_shared";
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

const title = "contact:form_title"

const form_labels = {
  required: "contact:required",
  name: "contact:name",
  email: "contact:email",
  subject: "contact:subject",
  message: "contact:message",
}

const button = "common:submit"

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
    <section className="contact-section-form flex-centered flex-col section-y-short">
        <TextAnimationLetter
          className="title-primary-md flex justify-center"
          text={t(title)}
        />
      <Container maxW="480px" mt={6} mb={12}>
        {error && (
          <Text className="text-center" color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <div className="glass-container p-4 lg:p-6">
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <div className="flex items-baseline">
              <FormLabel>{t(form_labels.name)}</FormLabel>
              <FormErrorMessage mt={0}>{t(form_labels.required)}</FormErrorMessage>
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
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <div className="flex items-baseline">
              <FormLabel>{t(form_labels.email)}</FormLabel>
              <FormErrorMessage mt={0}>{t(form_labels.required)}</FormErrorMessage>
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
              <FormLabel>{t(form_labels.subject)}</FormLabel>
              <FormErrorMessage mt={0}>{t(form_labels.required)}</FormErrorMessage>
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
              <FormLabel>{t(form_labels.message)}</FormLabel>
              <FormErrorMessage mt={0}>{t(form_labels.required)}</FormErrorMessage>
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
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
              isLoading={isLoading}
            >
              {t(button)}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
