import Title from "../title-component/title.component";
import Card from "./pricing-card/card.component";
import price from "./pricing.module.scss";

const Pricing = () => {
  return (
    <section className={price.pricing}>
      <div className="container">
        <Title title={"Pricing"} />

        <div className={price.cardsWrap}>
          <Card
            price={29}
            tarif={"Basic"}
            included={[
              "Domain licenses",
              "Downloads per month",
              "Regular extension",
              "Active sessions at once",
            ]}
            notIncluded={["Updates", "Premium support"]}
          />

          <Card
            price={49}
            tarif={"Standart"}
            included={[
              "Domain licenses",
              "Downloads per month",
              "Regular extension",
              "Active sessions at once",
              "Updates",
            ]}
            notIncluded={["Premium support"]}
          />

          <Card
            price={79}
            tarif={"Premium"}
            included={[
              "Domain licenses",
              "Downloads per month",
              "Regular extension",
              "Active sessions at once",
              "Updates",
              "Premium support",
            ]}
            notIncluded={[]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
