import type { Meta } from '@storybook/react';
import { SimpleGrid } from '../Layout/';
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseCircleIcon,
  CloseIcon,
  SettingsIcon,
  UserIcon,
  MenuIcon,
  MoreVerticalIcon,
  MoreHorizontalIcon,
  AddIcon,
  TrashIcon,
  LightbulbIcon,
  FileWarningIcon,
  SuccessIcon,
  SuccessCircleIcon,
  WarningCircleIcon,
  InfoIcon,
  WalletIcon,
  RefreshIcon,
  CopyIcon,
  SearchIcon,
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  LogOutIcon,
} from '.';
import { deepCopy } from '../utils';

const meta: Meta<typeof ArrowRightIcon> = {
  title: 'Components/Icon',
  component: ArrowRightIcon,
  tags: ['autodocs'],
};
export default meta;

export const IconGallery = {
  render: () => {
    return (
      <SimpleGrid
        spacing="1rem"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(50px, 1fr))"
        sx={{ maxWidth: '500px' }}
      >
        <ArrowRightIcon sx={{ color: 'grey' }} size="20px" />
        <ArrowUpIcon sx={{ color: 'grey' }} size="20px" />
        <ArrowLeftIcon sx={{ color: 'grey' }} size="20px" />
        <ArrowDownIcon sx={{ color: 'grey' }} size="20px" />
        <ChevronDownIcon sx={{ color: 'grey' }} size="20px" />
        <ChevronLeftIcon sx={{ color: 'grey' }} size="20px" />
        <ChevronRightIcon sx={{ color: 'grey' }} size="20px" />
        <ChevronUpIcon sx={{ color: 'grey' }} size="20px" />

        <CloseCircleIcon sx={{ color: 'grey' }} size="20px" />
        <CloseIcon sx={{ color: 'grey' }} size="20px" />
        <SettingsIcon sx={{ color: 'grey' }} size="20px" />
        <UserIcon sx={{ color: 'grey' }} size="20px" />
        <MenuIcon sx={{ color: 'grey' }} size="20px" />
        <MoreVerticalIcon sx={{ color: 'grey' }} size="20px" />
        <MoreHorizontalIcon sx={{ color: 'grey' }} size="20px" />
        <AddIcon sx={{ color: 'grey' }} size="20px" />
        <TrashIcon sx={{ color: 'grey' }} size="20px" />
        <LightbulbIcon sx={{ color: 'grey' }} size="20px" />
        <FileWarningIcon sx={{ color: 'grey' }} size="20px" />
        <SuccessIcon sx={{ color: 'grey' }} size="20px" />

        <SuccessCircleIcon sx={{ color: 'grey' }} size="20px" />
        <WarningCircleIcon sx={{ color: 'grey' }} size="20px" />
        <InfoIcon sx={{ color: 'grey' }} size="20px" />
        <WalletIcon sx={{ color: 'grey' }} size="20px" />
        <RefreshIcon sx={{ color: 'grey' }} size="20px" />
        <CopyIcon sx={{ color: 'grey' }} size="20px" />
        <SearchIcon sx={{ color: 'grey' }} size="20px" />
        <ArrowDownCircleIcon sx={{ color: 'grey' }} size="20px" />
        <ArrowUpCircleIcon sx={{ color: 'grey' }} size="20px" />
        <LogOutIcon sx={{ color: 'grey' }} size="20px" />
      </SimpleGrid>
    );
  },
};

export const ResponsiveIcon = {
  render: () => {
    const style = {
      color: { sm: 'red', md: 'blue', lg: 'grey' },
      width: { sm: '1rem', md: '2rem', lg: '3rem' },
      height: { sm: '1rem', md: '2rem', lg: '3rem' },
    };
    return (
      <SimpleGrid
        spacing="1rem"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(50px, 1fr))"
        sx={{ maxWidth: '500px' }}
      >
        <ArrowRightIcon sx={deepCopy(style)} size="20px" />
        <ArrowUpIcon sx={deepCopy(style)} size="20px" />
        <ArrowLeftIcon sx={deepCopy(style)} size="20px" />
        <ArrowDownIcon sx={deepCopy(style)} size="20px" />
      </SimpleGrid>
    );
  },
};
