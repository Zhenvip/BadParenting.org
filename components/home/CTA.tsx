import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{locale.title}</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description1}
          </RoughNotation>{" "}
          {locale.description2}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description3}
          </RoughNotation>{" "}
          {locale.description4}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description5}
          </RoughNotation>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
      
      {/* HTML5 Game Iframe */}
      <div className="w-full max-w-4xl mt-8">
        <iframe 
          src="https://b.gamesdizi.com/ed/bad-parenting/" 
          width="100%" 
          height="600" 
          frameBorder="0"
          allowFullScreen
          title="Bad Parenting HTML5 Game"
        ></iframe>
      </div>
    </section>
  );
};

export default CTA;
