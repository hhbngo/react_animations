import { useMemo } from 'react';

const Card = ({
  value,
  symbol,
}: {
  value: number | string;
  symbol: string;
}) => {
  const display = useMemo(() => {
    return value && symbol ? (
      <>
        <p className="ml-1">{value}</p>
        <p className="self-center text-4xl">{symbol}</p>
        <p className="self-end mr-1">{value}</p>
      </>
    ) : (
      <div className="w-full h-full bg-red-500"></div>
    );
  }, [value, symbol]);

  const cardColor = (symbol: string) => {
    const red = ['♥', '⬥'];
    return red.includes(symbol) ? 'text-red-400' : 'text-gray-800';
  };

  return (
    <div
      className={`flex flex-col justify-between w-full h-full p-2 rounded-md bg-white text-2xl font-bold shadow-md ${cardColor(
        symbol
      )}`}
    >
      {display}
    </div>
  );
};

export default Card;
