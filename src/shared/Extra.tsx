import styled from 'styled-components';

const Extra = styled.div(({ theme }) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.larger,
  fontStyle: 'italic',
  margin: `${theme.spacing.small}px 0`
}));

export default Extra;
