import styles from "./firm-facts.module.scss";

type FirmFactsProps = {
  children: React.ReactNode;
};

const FirmFacts = (props: FirmFactsProps) => {
  const { children } = props;

  return (
    <div className={styles["firm-facts"]}>
      <a className={styles["firm-facts__close"]}></a>
      <h1>Firm Facts</h1>
      <div className={styles["firm-facts__content"]}>{children}</div>
    </div>
  );
};

export default FirmFacts;
