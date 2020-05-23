const formatValue = (value: string): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatValue;
