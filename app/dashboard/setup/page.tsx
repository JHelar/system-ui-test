'use client';

import { LayoutMain, Row } from '@/lib/Layout';
import { Label } from '@/lib/Label';
import { Separator } from '@/lib/Separator';
import { Icon } from '@/lib/Icon';
import { Button } from '@/lib/Button';
import { Panel } from '@/lib/Panel';

export default function DashboardSetup() {
  return (
    <LayoutMain alignSelf='center' justifySelf='center' width='large'>
      <Panel>
        <Label variant='title3' as='h2'>
          Let’s get started
        </Label>
        <Label colorName='lowContrast'>
          Your dashboard is empty. Here’s how to get started with PeerDB.
        </Label>
        <Separator variant='empty' height='thin' />
        <Row
          leadingIcon={() => <Icon name='square' />}
          title={() => 'Create your first deployment'}
          description={() => 'Description'}
        />
        <Row
          leadingIcon={() => <Icon name='square' />}
          title={() => 'Create your first deployment'}
          description={() => 'Description'}
        />
        <Row
          leadingIcon={() => <Icon name='square' />}
          title={() => 'Create your first deployment'}
          description={() => 'Description'}
        />
        <Separator variant='empty' height='thin' />
        <Button className='w-full'>Create deployment</Button>
        <Button className='w-full'>Create connector</Button>
        <Button className='w-full'>Create mirror</Button>
      </Panel>
    </LayoutMain>
  );
}
