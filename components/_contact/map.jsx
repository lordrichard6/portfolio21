import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";


export default function MapComponent() {
  let { t } = useTranslation();

  return (
    <Container className="h-96 w-80 sm:w-[40rem] sm:h-[25rem] rounded-sm shadow-md overflow-hidden mt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21609.42602777489!2d8.460666566561718!3d47.38895481500931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bc0e470d21d%3A0x1fcd415ee1d510e0!2sAltstetten%2C%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1678282728054!5m2!1sen!2sch"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </Container>
  );
}

const Container = styled.div``;
