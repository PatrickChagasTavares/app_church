import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconCross from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSetting from 'react-native-vector-icons/AntDesign';

import Main from '~/pages/Main';
import Door from '~/pages/Door';
import Children from '~/pages/Children';
import Social from '~/pages/Social';
import Settings from '~/pages/Settings';
import Information from '~/pages/information';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createMaterialBottomTabNavigator(
      {
        Social: {
          screen: Social,
          navigationOptions: {
            tabBarLabel: 'Ação Social',
            tabBarIcon: ({tintColor}) => (
              <View>
                <IconCross
                  style={[{color: tintColor}]}
                  size={25}
                  name={'cross'}
                />
              </View>
            ),
          },
        },
        Children: {
          screen: Children,
          navigationOptions: {
            tabBarLabel: 'Crianças',
            tabBarIcon: ({tintColor}) => (
              <View>
                <IconMC style={[{color: tintColor}]} size={25} name={'baby'} />
              </View>
            ),
          },
        },
        Main: {
          screen: Main,
          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
              <View>
                <IconFontAwesome
                  style={[{color: tintColor}]}
                  size={25}
                  name={'home'}
                />
              </View>
            ),
          },
        },

        Door: {
          screen: Door,
          navigationOptions: {
            tabBarLabel: 'Porta em Porta',
            tabBarIcon: ({tintColor}) => (
              <View>
                <IconMC
                  style={[{color: tintColor}]}
                  size={25}
                  name={'door-open'}
                />
              </View>
            ),
          },
        },
        Settings: {
          screen: Settings,
          navigationOptions: {
            tabBarLabel: 'Configurações',
            tabBarIcon: ({tintColor}) => (
              <View>
                <IconSetting
                  style={[{color: tintColor}]}
                  size={25}
                  name={'setting'}
                />
              </View>
            ),
          },
        },
      },
      {
        initialRouteName: 'Main',
        activeColor: '#3b9eff',
        inactiveColor: '#0471C6',
        barStyle: {backgroundColor: '#fff'},
      },
    ),
    Information: createSwitchNavigator({Information}),
  }),
);

export default Routes;
