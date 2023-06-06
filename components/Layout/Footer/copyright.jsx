import useTranslation from "next-translate/useTranslation";

export default function CopyrightComponent() {
  let { t } = useTranslation();

  return (
    <div className="section-x-default">
      <hr className="opacity-20" />
      <div className="flex justify-between text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.</p>
        <p>{t("common:rights_reserved")}</p>
      </div>
    </div>
  );
}