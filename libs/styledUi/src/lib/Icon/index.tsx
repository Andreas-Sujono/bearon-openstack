/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowRightIcon as ArrowRightIconRaw,
  ArrowLeftIcon as ArrowLeftIconRaw,
  ArrowUpIcon as ArrowUpIconRaw,
  ArrowDownIcon as ArrowDownIconRaw,
  ChevronDownIcon as ChevronDownIconRaw,
  ChevronLeftIcon as ChevronLeftIconRaw,
  ChevronRightIcon as ChevronRightIconRaw,
  ChevronUpIcon as ChevronUpIconRaw,
  ArrowDownCircleIcon as ArrowDownCircleIconRaw,
  XCircleIcon as CloseCircleIconRaw,
  XIcon as CloseIconRaw,
  SettingsIcon as SettingsIconRaw,
  UserIcon as UserIconRaw,
  MenuIcon as MenuIconRaw,
  MoreVerticalIcon as MoreVerticalIconRaw,
  MoreHorizontalIcon as MoreHorizontalIconRaw,
  PlusIcon as AddIconRaw,
  TrashIcon as TrashIconRaw,
  LightbulbIcon as LightbulbIconRaw,
  FileWarningIcon as FileWarningIconRaw,
  CheckIcon as SuccessIconRaw,
  CheckCircleIcon as SuccessCircleIconRaw,
  AlertCircleIcon as WarningCircleIconRaw,
  InfoIcon as InfoIconRaw,
  WalletIcon as WalletIconRaw,
  RefreshCcw as RefreshIconRaw,
  CopyIcon as CopyIconRaw,
  SearchIcon as SearchIconRaw,
  ArrowUpCircleIcon as ArrowUpCircleIconRaw,
  LogOutIcon as LogOutIconRaw,
  CalendarDaysIcon as DateIconRaw,
  TimerIcon as TimerIconRaw,
  TagIcon as TagIconRaw,
  BookmarkIcon as BookmarkIconRaw,
} from 'lucide-react';
import React from 'react';
import styled from 'styled-components';
import { CommonStyleProps, parseCommonProps, parseProps } from '../utils';

// const Wrapper = (
//   Component: React.FC<
//     React.HTMLAttributes<HTMLOrSVGElement> &
//       CommonStyleProps & {
//         size?: string | number;
//         width?: string | number;
//         height?: string | number;
//         fill?: string;
//       }
//   >
// ) => {
//   return styled(Component)`
//     ${(props) => parseCommonProps((props) as any)}
//   `;
// };

const StyledComponent = styled.div`
  ${(props) => parseCommonProps(props as any)}
`;
interface IconProps
  extends CommonStyleProps,
    Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'color'> {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  fill?: string;
}
const Wrapper = (Component: React.ComponentType<IconProps>) => {
  const TransformedComponent = (props: IconProps) => {
    return <StyledComponent {...parseProps(props)} as={Component} />;
  };

  return TransformedComponent;
};

export const ArrowRightIcon = Wrapper(ArrowRightIconRaw);
export const ArrowUpIcon = Wrapper(ArrowUpIconRaw);
export const ArrowLeftIcon = Wrapper(ArrowLeftIconRaw);
export const ArrowDownIcon = Wrapper(ArrowDownIconRaw);

export const ChevronDownIcon = Wrapper(ChevronDownIconRaw);
export const ChevronLeftIcon = Wrapper(ChevronLeftIconRaw);
export const ChevronRightIcon = Wrapper(ChevronRightIconRaw);
export const ChevronUpIcon = Wrapper(ChevronUpIconRaw);

export const CloseCircleIcon = Wrapper(CloseCircleIconRaw);
export const CloseIcon = Wrapper(CloseIconRaw);
export const SettingsIcon = Wrapper(SettingsIconRaw);
export const UserIcon = Wrapper(UserIconRaw);
export const MenuIcon = Wrapper(MenuIconRaw);
export const MoreVerticalIcon = Wrapper(MoreVerticalIconRaw);
export const MoreHorizontalIcon = Wrapper(MoreHorizontalIconRaw);
export const AddIcon = Wrapper(AddIconRaw);
export const TrashIcon = Wrapper(TrashIconRaw);

export const LightbulbIcon = Wrapper(LightbulbIconRaw);
export const FileWarningIcon = Wrapper(FileWarningIconRaw);
export const SuccessIcon = Wrapper(SuccessIconRaw);
export const SuccessCircleIcon = Wrapper(SuccessCircleIconRaw);
export const WarningCircleIcon = Wrapper(WarningCircleIconRaw);
export const InfoIcon = Wrapper(InfoIconRaw);
export const WalletIcon = Wrapper(WalletIconRaw);
export const RefreshIcon = Wrapper(RefreshIconRaw);
export const CopyIcon = Wrapper(CopyIconRaw);
export const SearchIcon = Wrapper(SearchIconRaw);

export const ArrowDownCircleIcon = Wrapper(ArrowDownCircleIconRaw);
export const ArrowUpCircleIcon = Wrapper(ArrowUpCircleIconRaw);
export const LogOutIcon = Wrapper(LogOutIconRaw);

export const DateIcon = Wrapper(DateIconRaw);
export const TimerIcon = Wrapper(TimerIconRaw);

export const TagIcon = Wrapper(TagIconRaw);
export const BookmarkIcon = Wrapper(BookmarkIconRaw);
