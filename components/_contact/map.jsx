import useTranslation from "next-translate/useTranslation";

// import { TextAnimationLetter } from "../_shared";

// const title = "contact:map_title"

export default function MapComponent() {
  let { t } = useTranslation();

  return (
    <div className="contact-section-map flex-centered flex-col w-full xl:w-1/2 xl:pl-8 mb-8 xl:mb-0">
    {/* <TextAnimationLetter
        className="title-primary-md flex justify-center"
        text={t(title)}
      /> */}
      <p className="text-primary-lg font-bold w-full mb-2">Look for me here...</p>
      <div className="h-96 w-full sm:h-[25rem] rounded-sm shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10821.99129826993!2d8.535821275751589!3d47.304612339133996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7b868c78e9b%3A0xe8e42096425b0f8f!2s8803%20R%C3%BCschlikon!5e0!3m2!1sen!2sch!4v1696933913380!5m2!1sen!2sch"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}