import { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { RowWithToggleGroup } from '../Layout';
import { Label } from '../Label';
import { ToggleGroup, ToggleGroupItem } from '../Toggle';

const chartData = Array(31)
  .fill(null)
  .map((_, index) => ({
    name: index,
    month: 50 * (index < 25 ? 0 : 1),
  }));

const categories = ['month'];

export default {
  title: 'Components / BarChart',
  component: BarChart,
  tags: ['autodocs'],
  args: {
    data: chartData,
    index: 'name',
    categories: categories,
    showGridLines: false,
    showLegend: false,
    showYAxis: false,
    top: () => (
      <RowWithToggleGroup
        label={() => <Label>Sync history</Label>}
        action={() => (
          <ToggleGroup defaultValue='item1'>
            <ToggleGroupItem value='item1'>Month</ToggleGroupItem>
            <ToggleGroupItem value='item2'>Week</ToggleGroupItem>
            <ToggleGroupItem value='item3'>Day</ToggleGroupItem>
          </ToggleGroup>
        )}
      />
    ),
  },
} as Meta<typeof BarChart>;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {};
