//Interna
import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity, View} from 'react-native';
import {navigateReplace} from '~/lib/util';

import {AndroidBackHandler} from '~/components/button';
import {Status, Icon, Text, Container, ThemeHeader} from './styles';

/**
 * Esse componente deve ser usado para qualquer header com icone nas lateral esquerda e um titulo no meio .
 */
const Header = ({title, navigation, back, backTo, theme}) => {
  /*
   * Esse icone é o back padrão
   * Caso esteja vazia ele tentará retornar uma tela na stack (pop).
   */
  const backIcon = () => {
    if (backTo)
      return (
        <TouchableOpacity
          onPress={() => navigateReplace(backTo)}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
      );
  };

  return (
    <ThemeHeader typeTheme={theme} hasIconRight={backTo}>
      <View>
        <Status />
        <Container>
          {backIcon()}
          <Text>{title}</Text>
        </Container>
        {backTo && <AndroidBackHandler backTo={backTo} />}
      </View>
    </ThemeHeader>
  );
};

Header.propTypes = {
  /*
   * String com o nome da tela que irá voltar.
   * Caso esteja vazia ele tentará retornar uma tela na stack (pop).
   * Caso esteja preenchida ele adicionará o retorno no hardware (AndroidBackHandler).
   */
  backTo: PropTypes.string,
  /*
   * String com o titulo que vai ficar no meio do header.
   * O posicionamento dele é definido icone a direta, caso exista é space-between caso não é flex start
   */
  title: PropTypes.string,
  /*
   * Função de click do icone a direita.
   * Ele define o posicionamento dos elementos tendo em vista que nunca poderá existir um icone a direita sem funcionalidade
   */
  clickIcon: PropTypes.func,
  /*
   * Booleano que define se deve mostrar um icone de back a esquerda que quando clicado ira retornar uma tela na stack (pop).
   */
  back: PropTypes.bool,
  /*
   * Uma string obrigatoria que define o tema de cores da status bar e do header.
   */
  theme: PropTypes.oneOf(['blue-light']).isRequired,
};

export default withNavigation(Header);
