import '@/styles/global.scss';
import { FirmFacts, FirmFactsCard, Button } from '@/components';

type CardProps = {
  id: number;
  variant: 'default' | 'border';
  buttonProps: {
    text: string;
    disabled?: boolean;
    variant?: 'default' | 'icon';
  };
};

const cards: CardProps[] = [
  {
    id: 0,
    variant: 'default',
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      variant: 'icon',
    },
  },
  {
    id: 1,
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      variant: 'icon',
    },
    variant: 'default',
  },
  {
    id: 2,
    buttonProps: {
      text: 'This is a one line button',
    },
    variant: 'default',
  },
  {
    id: 3,
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      variant: 'icon',
    },
    variant: 'default',
  },
  {
    id: 4,
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      variant: 'icon',
    },
    variant: 'border',
  },
  {
    id: 5,
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      disabled: true,
      variant: 'icon',
    },
    variant: 'border',
  },
  {
    id: 6,
    buttonProps: {
      text: 'This is a two line button that terminates with ellipsis test text',
      variant: 'icon',
    },
    variant: 'border',
  },
];

function App() {
  return (
    <FirmFacts>
      {cards.map((card) => (
        <FirmFactsCard key={card.id} variant={card.variant}>
          <Button {...card.buttonProps}>{card.buttonProps.text}</Button>
        </FirmFactsCard>
      ))}
    </FirmFacts>
  );
}

export default App;
