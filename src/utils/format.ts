export function formatAddress(address: string) {
  return address.slice(0, 4) + "..." + address.slice(-4);
}
export const formatValue = (s: string): string => {
  const num = Number(s);
  // 如果是整数，就直接返回
  if (num % 1 === 0) {
    return num.toString();
  }
  return Number(s).toFixed(4);
  if (s.length > 7) {
    return s.slice(0, 7);
  }
  return s;
};

export const formatValue2 = (s: string): string => {
  return Number(s).toFixed(2);
};
