import { Children, PropsWithChildren } from 'react';
import { RenderSlot } from '../types';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledWrapper,
  TableWrapper,
  ToolbarSlot,
  ToolbarWrapper,
} from './Table.styles';
import { isDefined } from '../utils/isDefined';
import { LabelProps } from '../Label';
import { Separator } from '../Separator';
import { renderSlotWith } from '../utils/renderSlotWith';

type TableProps = PropsWithChildren<{
  title?: RenderSlot;
  toolbar?: {
    left?: RenderSlot;
    right?: RenderSlot;
  };
  header?: RenderSlot;
}>;

export function Table({ title, toolbar, header, children }: TableProps) {
  const arrayChildren = Children.toArray(children);

  const Title = isDefined(title) && (
    <>
      {renderSlotWith(title, { variant: 'headline' })}
      <Separator height='thin' variant='empty' />
    </>
  );

  const ToolbarLeft = isDefined(toolbar?.left) && (
    <ToolbarSlot>{toolbar?.left()}</ToolbarSlot>
  );
  const ToolbarRight = isDefined(toolbar?.right) && (
    <ToolbarSlot>{toolbar?.right()}</ToolbarSlot>
  );

  const Toolbar = isDefined(toolbar) && (
    <>
      <ToolbarWrapper>
        {ToolbarLeft}
        {ToolbarRight}
      </ToolbarWrapper>
      <Separator height='tall' variant='indent' />
    </>
  );

  const Header = isDefined(header) && (
    <>
      <StyledTableHeader>{header()}</StyledTableHeader>
      <Separator height='thin' variant='indent' as='tr' />
    </>
  );

  return (
    <StyledWrapper>
      {Title}
      {Toolbar}
      <TableWrapper>
        <StyledTable>
          {Header}
          <StyledTableBody>
            {Children.map(arrayChildren, (child, index) => {
              const isLast = index === arrayChildren.length - 1;

              return (
                <>
                  {child}
                  {!isLast && (
                    <Separator height='tall' variant='indent' as='tr' />
                  )}
                </>
              );
            })}
          </StyledTableBody>
        </StyledTable>
      </TableWrapper>
    </StyledWrapper>
  );
}
