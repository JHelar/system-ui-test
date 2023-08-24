import { ReactElement, cloneElement, isValidElement } from 'react';
import { RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import {
  RowWrapper,
  StyledDescription,
  StyledDescriptionSuffix,
  StyledFootnote,
  StyledPreTitle,
  StyledTitle,
  StyledTitleSuffix,
  TextContent,
} from './Row.styles';

type RowProps = {
  leadingIcon?: RenderSlot;
  thumbnail?: RenderSlot;
  preTitle?: string;
  title?: string;
  titleSuffix?: string;
  description?: string;
  descriptionSuffix?: string;
  footnote?: string;
  trailingIcon?: RenderSlot;
  className?: string;
};

/**
 * Row layout component
 *
 * [Figma spec](https://www.figma.com/file/DBMDh1LNNvp9H99N9lZgJ7/PeerDB?type=design&node-id=1-374&mode=dev)
 */
export function Row({
  leadingIcon,
  thumbnail,
  preTitle,
  title,
  titleSuffix,
  description,
  descriptionSuffix,
  footnote,
  trailingIcon,
  ...wrapperProps
}: RowProps) {
  const Title = isDefined(title) && <StyledTitle>{title}</StyledTitle>;
  const PreTitle = isDefined(preTitle) && (
    <StyledPreTitle>{preTitle}</StyledPreTitle>
  );
  const TitleSuffix = isDefined(titleSuffix) && (
    <StyledTitleSuffix>{titleSuffix}</StyledTitleSuffix>
  );
  const Description = isDefined(description) && (
    <StyledDescription>{description}</StyledDescription>
  );
  const DescriptionSuffix = isDefined(descriptionSuffix) && (
    <StyledDescriptionSuffix>{descriptionSuffix}</StyledDescriptionSuffix>
  );
  const Footnote = isDefined(footnote) && (
    <StyledFootnote>{footnote}</StyledFootnote>
  );

  const LeadingIcon =
    isDefined(leadingIcon) &&
    isValidElement(leadingIcon()) &&
    cloneElement(leadingIcon() as ReactElement, {
      style: { gridArea: 'leading-icon' },
    });

  const TrailingIcon =
    isDefined(trailingIcon) &&
    isValidElement(trailingIcon()) &&
    cloneElement(trailingIcon() as ReactElement, {
      style: { gridArea: 'trailing-icon' },
    });

  const Thumbnail =
    isDefined(thumbnail) &&
    isValidElement(thumbnail()) &&
    cloneElement(thumbnail() as ReactElement, {
      style: { gridArea: 'thumbnail' },
    });

  return (
    <RowWrapper {...wrapperProps}>
      {LeadingIcon}
      {Thumbnail}
      <TextContent>
        {PreTitle}
        <RowWrapper>
          {Title}
          {TitleSuffix}
        </RowWrapper>
        <RowWrapper>
          {Description}
          {DescriptionSuffix}
        </RowWrapper>
        {Footnote}
      </TextContent>
      {TrailingIcon}
    </RowWrapper>
  );
}
