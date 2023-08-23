import { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';
import { Select } from '../Select';
import { TableRow } from './TableRow';
import { Badge } from '../Badge';
import { Icon } from '../Icon';
import { Button } from '../Button';

export default {
  title: 'Components / Table / TableRow',
  component: TableRow,
  render: () => (
    <table>
      <tbody>
        <TableRow>
          <TableCell variant='button'>
            <Checkbox />
          </TableCell>
          <TableCell variant='extended'>
            <Label>Label</Label>
          </TableCell>
          <TableCell>
            <Label>Label</Label>
          </TableCell>
          <TableCell>
            <Label>Label</Label>
          </TableCell>
          <TableCell>
            <Label>Label</Label>
          </TableCell>
          <TableCell>
            <Select placeholder='Select' />
          </TableCell>
          <TableCell>
            <Badge variant='positive'>Active</Badge>
          </TableCell>
          <TableCell variant='button'>
            <Button>
              <Icon name='more_horiz' />
            </Button>
          </TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
} satisfies Meta<typeof TableRow>;

type Story = StoryObj<typeof TableRow>;
export const Default: Story = {};
