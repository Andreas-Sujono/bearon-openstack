import { InfoIcon } from '@bearon/icon';
import Banner from './Banner';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
};
export default meta;

export const defaultBanner = {
  render: () => {
    return <Banner text="This is a default banner" />;
  },
};

export const withIcon = {
  render: () => {
    return (
      <Banner text="You can insert a normal string here." icon={<InfoIcon />} />
    );
  },
};

export const colours = {
  render: () => {
    return (
      <div>
        <Banner
          text="This is a primary banner."
          icon={<InfoIcon />}
          background="primary"
        />
        <br />
        <Banner
          text="This is a secondary banner"
          icon={<InfoIcon />}
          background="secondary"
        />
        <br />
        <Banner
          text="This is a success banner"
          icon={<InfoIcon />}
          background="success"
        />
        <br />
        <Banner
          text="This is a warning banner"
          icon={<InfoIcon />}
          background="warning"
        />
        <br />
        <Banner
          text="This is an error banner"
          icon={<InfoIcon />}
          background="error"
          dismissable
        />
      </div>
    );
  },
};

export const subtleColours = {
  render: () => {
    return (
      <div>
        <Banner
          text="This is a primary banner."
          icon={<InfoIcon fill="var(--primary)" />}
          background="primary"
          backgroundOpacity={0.2}
          textColor="black"
        />
        <br />
        <Banner
          text="This is a secondary banner"
          icon={<InfoIcon fill="var(--secondary)" />}
          background="secondary"
          backgroundOpacity={0.2}
          textColor="black"
        />
        <br />
        <Banner
          text="This is a success banner"
          icon={<InfoIcon fill="var(--success)" />}
          background="success"
          backgroundOpacity={0.2}
          textColor="black"
        />
        <br />
        <Banner
          text="This is a warning banner"
          icon={<InfoIcon fill="var(--warning)" />}
          background="warning"
          backgroundOpacity={0.2}
          textColor="black"
        />
        <br />
        <Banner
          text="This is an error banner"
          icon={<InfoIcon fill="var(--error)" />}
          background="error"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
      </div>
    );
  },
};

export const SmallSizes = {
  render: () => {
    return (
      <div>
        <Banner
          text="This is a small size banner."
          icon={<InfoIcon fill="var(--primary)" />}
          background="primary"
          backgroundOpacity={0.2}
          textColor="black"
          size="xs"
        />
        <br />
        <Banner
          text="This is a secondary banner"
          icon={<InfoIcon fill="var(--secondary)" />}
          background="secondary"
          backgroundOpacity={0.2}
          textColor="black"
          size="xs"
        />
        <br />
        <Banner
          text="This is a success banner"
          icon={<InfoIcon fill="var(--success)" />}
          background="success"
          backgroundOpacity={0.2}
          textColor="black"
          size="xs"
        />
        <br />
        <Banner
          text="This is a warning banner"
          icon={<InfoIcon fill="var(--warning)" />}
          background="warning"
          backgroundOpacity={0.2}
          textColor="black"
          size="xs"
        />
        <br />
        <Banner
          text="This is an error banner"
          icon={<InfoIcon fill="var(--error)" />}
          background="error"
          backgroundOpacity={0.2}
          textColor="black"
          size="xs"
          dismissable
        />
      </div>
    );
  },
};

export const Dismissable = {
  render: () => {
    return (
      <div>
        <Banner
          text="This is a primary banner."
          icon={<InfoIcon fill="var(--primary)" />}
          background="primary"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
        <br />
        <Banner
          text="This is a secondary banner"
          icon={<InfoIcon fill="var(--secondary)" />}
          background="secondary"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
        <br />
        <Banner
          text="This is a success banner"
          icon={<InfoIcon fill="var(--success)" />}
          background="success"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
        <br />
        <Banner
          text="This is a warning banner"
          icon={<InfoIcon fill="var(--warning)" />}
          background="warning"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
        <br />
        <Banner
          text="This is an error banner"
          icon={<InfoIcon fill="var(--error)" />}
          background="error"
          backgroundOpacity={0.2}
          textColor="black"
          dismissable
        />
      </div>
    );
  },
};

// export const Sizes = {
//   render: () => {
//     return (
//       <Row gap="1rem">
//         <Badge size="xs">
//           <Text>badge xs</Text>
//         </Badge>
//         <Badge size="sm">
//           <Text>badge sm</Text>
//         </Badge>
//         <Badge size="md">
//           <Text>badge md</Text>
//         </Badge>
//         <Badge size="lg">
//           <Text>badge lg</Text>
//         </Badge>
//         <Badge size="xl">
//           <Text>badge xl</Text>
//         </Badge>
//       </Row>
//     );
//   },
// };

// export const Colours = {
//   render: () => {
//     return (
//       <Row gap="1rem">
//         <Badge background="primary">
//           <Text>badge primary</Text>
//         </Badge>
//         <Badge background="secondary">
//           <Text>badge secondary</Text>
//         </Badge>
//         <Badge background="success">
//           <Text>badge success</Text>
//         </Badge>
//         <Badge background="warning">
//           <Text>badge warning</Text>
//         </Badge>
//       </Row>
//     );
//   },
// };

// export const SubtleColors = {
//   render: () => {
//     return (
//       <Row gap="1rem">
//         <Badge background="primary" backgroundOpacity={0.2}>
//           <Text colour="primary">badge primary</Text>
//         </Badge>
//         <Badge background="secondary" backgroundOpacity={0.2}>
//           <Text colour="secondary">badge secondary</Text>
//         </Badge>
//         <Badge background="success" backgroundOpacity={0.2}>
//           <Text colour="success">badge success</Text>
//         </Badge>
//         <Badge background="warning" backgroundOpacity={0.2}>
//           <Text colour="warning">badge warning</Text>
//         </Badge>
//       </Row>
//     );
//   },
// };

// export const WithIcon = {
//   render: () => {
//     return (
//       <Row gap="1rem">
//         <Badge background="primary">
//           <UserIcon size="16px" />
//           <Text>badge icon</Text>
//           <LightbulbIcon size="16px" />
//         </Badge>
//       </Row>
//     );
//   },
// };
