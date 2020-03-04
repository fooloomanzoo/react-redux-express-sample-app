import styled from 'styled-components';

const Text = styled.div(({ theme }) => ({
  color: theme.color.secondary,
  fontSize: theme.fontSize.medium,
  margin: `${theme.spacing.small}px 0`
}));

export default Text;
