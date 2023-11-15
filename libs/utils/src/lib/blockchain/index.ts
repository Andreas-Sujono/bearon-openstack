export const isAddressTheSame = (addr1: string | null, addr2: string | null) =>
  addr1?.toLowerCase() === addr2?.toLowerCase();

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const EEE_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

export function isNativeToken(token: string) {
  return token === ZERO_ADDRESS || token === EEE_ADDRESS;
}
