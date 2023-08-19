import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

export default {
  title: 'Components / ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const One: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant='normalSolid'>Action</Button>
    </ButtonGroup>
  ),
};

export const Two: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant='normal'>Cancel</Button>
      <Button variant='normalSolid'>Action</Button>
    </ButtonGroup>
  ),
};

export const Three: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant='normal'>Cancel</Button>
      <Button variant='normal'>Action</Button>
      <Button variant='normalSolid'>Action</Button>
    </ButtonGroup>
  ),
};
