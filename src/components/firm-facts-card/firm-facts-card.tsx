import styles from './firm-facts-card.module.scss';

type FirmFactsCardProps = {
  variant: 'default' | 'border';
  children: React.ReactNode;
};

const FirmFactsCard = (props: FirmFactsCardProps) => {
  const { variant, children } = props;
  return <div className={` ${styles['firm-facts-card']} ${styles[`firm-facts-card--${variant}`]}`}>{children}</div>;
};

export default FirmFactsCard;

FirmFactsCard.defaultProps = {
  variant: 'default',
};
