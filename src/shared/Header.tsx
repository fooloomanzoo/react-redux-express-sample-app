import styled from 'styled-components';

const Header = styled.header(({ theme }) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.large,
  margin: `${theme.spacing.small}px 0`
}));

export default Header;
