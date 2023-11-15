import moment from 'moment';
import numbro from 'numbro'; //TODO: implement numbro formatting

export const formatSeparator = (num: number | undefined, _decimals = 3) => {
  if (!num) return '0.00';

  const decimals =
    num && Number(num) < Math.pow(10, -_decimals) ? _decimals + 2 : _decimals;
  const parsedNum = numbro(toFixedTruncate(num || 0, decimals)).format({
    thousandSeparated: true,
  });
  return parsedNum;
};

// using a currency library here in case we want to add more in future
export const formatDollarAmount = (
  num: number | undefined,
  digits = 2,
  round = true
) => {
  if (num === 0) return '$0.00';
  if (!num) return '-';
  if (num < 0.001 && digits <= 3) {
    return '<$0.001';
  }

  return numbro(num).formatCurrency({
    average: round,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      million: 'M',
      billion: 'B',
    },
  });
};

// using a currency library here in case we want to add more in future
export const formatAmount = (num: number | undefined, digits = 2) => {
  if (num === 0) return '0';
  if (!num) return '-';
  if (num < 0.001) {
    return '<0.001';
  }
  return numbro(num).format({
    average: true,
    mantissa: num > 1000 ? 2 : digits,
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
    },
  });
};

export const getDollarString = (value: number, decimal: number) => {
  return `$${value.toFixed(decimal)}`;
};

export const formatDate = (date: string | number, format = 'dd/MM/yyyy') => {
  return moment(date).format(format);
};

export const formatRelativeDate = (date: string | number) => {
  const yearsAgo = moment().diff(date, 'years');
  const monthsAgo = moment().diff(date, 'months');
  const daysAgo = moment().diff(date, 'days');
  const hoursAgo = moment().diff(date, 'hours');
  const minutesAgo = moment().diff(date, 'minutes');
  //   const secondsAgo = moment().diff(date, 'seconds');

  if (yearsAgo > 0) return `${yearsAgo} years ago`;
  if (monthsAgo > 0) return `${monthsAgo} months ago`;
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  if (minutesAgo > 0) return `${minutesAgo} minutes ago`;

  return 'a second ago';
};

/**
 * note: this will return a string as the input type number expects a string,
 * if server needs a float, please parse it before sending it to server
 */
export const parseNumberInput = (value: string, decimals = 10): string => {
  if (!value) return '';

  value = value.toString().replace(/(\+|-|e)/gi, '');

  let [intValue, decimalValue] = value.split('.');
  intValue = intValue || '';
  decimalValue = decimalValue || '';
  if (decimalValue.length > decimals) {
    return intValue + '.' + decimalValue.slice(0, decimals);
  }
  return value;
};

export const toFixedTruncate = (
  num: number | string,
  _decimals = 10
): string => {
  if (!num && num !== 0) return '0';
  if (typeof num === 'string') num = Number(num);
  if (!num) return num?.toString();
  const e = num?.toString().split('e')[1];
  const [int, decimals] = num.toString().split('e')[0].split('.');
  if (!decimals) return num.toString();
  const decimalTruncated = decimals?.slice(0, _decimals) || '0';
  const res = `${int}.${decimalTruncated}` + (e ? `e${e}` : '');

  if (Number(res) === 0) {
    return toFixedTruncate(num, _decimals + 2);
  }
  return res;
};

export const truncateText = (text = '', [h, t]: number[] = [10, 4]): string => {
  const head = text.slice(0, h);
  const tail = text.slice(-1 * t, text.length);
  return text.length > h + t ? [head, tail].join('...') : text;
};
