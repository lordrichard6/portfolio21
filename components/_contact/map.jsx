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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.44144746946!2d8.454335382075122!3d47.37752842273052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sen!2sch!4v1706894378869!5m2!1sen!2sch"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}