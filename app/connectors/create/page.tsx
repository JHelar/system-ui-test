'use client';

import { LayoutMain, RowWithSelect } from '@/lib/Layout';
import { Panel } from '@/lib/Panel';
import { Label } from '@/lib/Label';
import { Action } from '@/lib/Action';
import { Icon } from '@/lib/Icon';
import { Select } from '@/lib/Select';
import { ButtonGroup } from '@/lib/ButtonGroup';
import { Button } from '@/lib/Button';

export default function CreateConnector() {
  return (
    <LayoutMain alignSelf='center' justifySelf='center' width='xxLarge'>
      <Panel>
        <Label variant='title3'>Select source</Label>
        <Label colorName='lowContrast'>
          Start by selecting the data source for you new connector.
        </Label>
        <Action icon={() => <Icon name='help' />}>
          Learn about connectors
        </Action>
      </Panel>
      <Panel>
        <Label colorName='lowContrast' variant='subheadline'>
          Source
        </Label>
        <RowWithSelect
          label={() => (
            <Label as='label' htmlFor='source'>
              Data source
            </Label>
          )}
          action={() => <Select placeholder='Select' id='source' />}
        />
      </Panel>
      <Panel>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button variant='normalSolid'>Continue</Button>
        </ButtonGroup>
      </Panel>
    </LayoutMain>
  );
}
