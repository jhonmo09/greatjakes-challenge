import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'default' | 'icon';
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[`button--${variant}`]}`} {...rest}>
      {variant === 'icon' && <img src="assets/svg/search.svg" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;

Button.defaultProps = {
  variant: 'default',
};
