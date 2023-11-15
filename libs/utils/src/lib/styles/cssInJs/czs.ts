import stylis from './stylis.js';

const cache = {} as Record<string, { hash: string; rules: string }>;
const hash = () => Math.random().toString(36).replace('0.', '');

const sheet = document.createElement('style');
document.head.appendChild(sheet);

const none = (hash: string) => `.${hash}{display:none}`;
const hide = (hash: string) => (sheet.innerHTML = none(hash) + sheet.innerHTML);
const show = (hash: string) =>
  (sheet.innerHTML = sheet.innerHTML.replace(none(hash), ''));

const isExternalStyleSheet = (key: string) =>
  /^(\/|https?:\/\/)/.test(key.trim());

const process = (key: string) => (hash: string) => (rules: string) => {
  sheet.innerHTML += (cache[key] = {
    hash,
    rules: stylis()(`.${hash}`, rules),
  }).rules;
  if (isExternalStyleSheet(key)) show(hash);
};

export default (strings: string[], ...values: string[]) => {
  const key = strings[0].startsWith('/')
    ? strings[0]
    : strings.reduce(
        (acc, string, i) =>
          (acc += string + (values[i] == null ? '' : values[i])),
        ''
      );

  if (cache[key]) return cache[key].hash;

  const className = 'csz-' + hash();
  const append = process(key)(className);

  if (isExternalStyleSheet(key)) {
    hide(className);
    fetch(key)
      .then((res) => res.text())
      .then(append);
  } else append(key);

  return className;
};
