import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/styles';
import {StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';

const Themes = [
  {
    type: 'blue-light',
    textSize: 18,
    textColor: colors.white,
    iconColor: colors.white,
    backgroundColor: colors.primaryDark,
    statusStyle: 'dark-content',
    statusBackground: '#37abba',
  },
];

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;

const Text = styled.Text`
  font-size: ${props => props.theme.textSize};
  font-family: 'Roboto-Bold';
  font-weight: bold;
  color: ${props => props.theme.textColor};
  line-height: 20;
  margin-left: 36;
`;

const Icon = styled(MaterialIcon)`
  color: ${props => props.theme.iconColor};
  font-size: 25;
`;

const Status = styled(StatusBar).attrs(({theme}) => ({
  barStyle: theme.statusStyle,
  backgroundColor: theme.statusBackground,
}))``;

const ThemeHeader = styled(ThemeProvider).attrs(({typeTheme}) => ({
  theme: {
    ...Themes.find(a => a.type == typeTheme),
  },
}))``;

export {Status, Icon, Text, Container, ThemeHeader};
