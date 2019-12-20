import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Avatar, ListItem, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { requestBackup } from './actionCreator';
import MainHeader from '../Common/MainHeader';
import styles from '../Common/themeStyle';
import fadeHex from '../Common/colorConvert';

export default function Personal() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const backupStatus = useSelector((state) => state.backupState);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <MainHeader title="Profile" />
      <View style={[styles.deviceBody, { flex: 1, flexDirection: 'column' }]}>
        <View style={[styles.card, { padding: 0, overflow: 'hidden' }]}>
          <LinearGradient
            colors={['#f078a4', fadeHex('#f078a4')]}
            start={[0.1, 0.9]}
            end={[0.9, 0.1]}
            style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
          >
            <View style={{
              alignItems: 'center', paddingVertical: 30,
            }}
            >
              <Avatar rounded size={60} icon={{ name: 'user', type: 'font-awesome' }} />
              <Text style={[styles.secondaryHeading, { color: 'white' }]}>Johnathan Doe</Text>
              <Text style={{ color: 'white' }}>Email</Text>
            </View>
          </LinearGradient>
          <View style={{ paddingTop: 15, paddingBottom: 10, paddingHorizontal: 10 }}>
            <Text style={[styles.secondaryHeading, { color: 'grey', marginLeft: 12, marginBottom: 5 }]}>General</Text>
            <ListItem
              title="Personal details"
              subtitle="you can edit your information about your email address, phone number"
              subtitleStyle={{ color: 'grey' }}
              bottomDivider
            />
            <ListItem
              title="Backup data"
              subtitle={backupStatus.response}
              subtitleStyle={{ color: 'grey' }}
              rightElement={(
                <Button
                  title="Backup"
                  titleStyle={{ color: '#2fc899' }}
                  type="outline"
                  disabled={(backupStatus.response === 'Backing up')}
                  buttonStyle={{ borderColor: '#2fc899', borderRadius: 6 }}
                  onPress={() => dispatch(requestBackup(transactions))}
                />
              )}
              bottomDivider
            />
            <ListItem
              title="Change Password"
              bottomDivider
            />
            <ListItem title="Categories" subtitle="Add or remove categories" subtitleStyle={{ color: 'grey' }} />
          </View>
        </View>
      </View>
    </View>
  );
}
