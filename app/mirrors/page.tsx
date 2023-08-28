'use client';

import { Panel } from '@/lib/Panel';
import { Label } from '@/lib/Label';
import { LayoutMain } from '@/lib/Layout';
import { Select } from '@/lib/Select';
import { ButtonGroup } from '@/lib/ButtonGroup';
import { Button } from '@/lib/Button';
import { Header } from '@/lib/Header';
import { Table, TableCell, TableRow } from '@/lib/Table';
import { Checkbox } from '@/lib/Checkbox';
import { Icon } from '@/lib/Icon';
import { SearchField } from '@/lib/SearchField';
import { Badge } from '@/lib/Badge';

const Badges = [
  <Badge variant='positive' key={1}>
    <Icon name='play_circle' />
    Active
  </Badge>,
  <Badge variant='warning' key={1}>
    <Icon name='pause_circle' />
    Paused
  </Badge>,
  <Badge variant='destructive' key={1}>
    <Icon name='dangerous' />
    Broken
  </Badge>,
  <Badge variant='normal' key={1}>
    <Icon name='pending' />
    Incomplete
  </Badge>,
];

const ExampleTable = ({ title }: { title: string }) => (
  <Table
    title={() => <Label variant='headline'>{title}</Label>}
    toolbar={{
      left: () => (
        <>
          <Button variant='normalBorderless'>
            <Icon name='chevron_left' />
          </Button>
          <Button variant='normalBorderless'>
            <Icon name='chevron_right' />
          </Button>
          <Button variant='normalBorderless'>
            <Icon name='refresh' />
          </Button>
          <Button variant='normalBorderless'>
            <Icon name='help' />
          </Button>
          <Button variant='normalBorderless' disabled>
            <Icon name='download' />
          </Button>
        </>
      ),
      right: () => <SearchField placeholder='Search' />,
    }}
    header={() => (
      <TableRow>
        <TableCell as='th' variant='button'>
          <Checkbox variant='mixed' defaultChecked />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th'>
          <Select placeholder='Select' />
        </TableCell>
        <TableCell as='th' variant='button'>
          <Button>
            <Icon name='more_horiz' />
          </Button>
        </TableCell>
      </TableRow>
    )}
  >
    {Array(8)
      .fill(null)
      .map((_, index) => (
        <TableRow key={index}>
          <TableCell variant='button'>
            <Checkbox />
          </TableCell>
          <TableCell variant='extended'>
            <Label>Lorem</Label>
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
            <Label>Label</Label>
          </TableCell>
          <TableCell>
            {Badges[Math.round(Math.random() * (Badges.length - 1))]}
          </TableCell>
          <TableCell variant='button'>
            <Button>
              <Icon name='more_horiz' />
            </Button>
          </TableCell>
        </TableRow>
      ))}
  </Table>
);

export default function Mirrors() {
  return (
    <LayoutMain alignSelf='flex-start' justifySelf='flex-start' width='full'>
      <Panel>
        <Header
          variant='title2'
          slot={() => <Button variant='normalSolid'>New mirror</Button>}
        >
          Mirrors
        </Header>
      </Panel>
      <Panel>
        <ExampleTable title='Change-data capture' />
      </Panel>
      <Panel>
        <ExampleTable title='Streaming Query replication' />
      </Panel>
      <Panel>
        <ExampleTable title='Past Mirrors' />
      </Panel>
    </LayoutMain>
  );
}
