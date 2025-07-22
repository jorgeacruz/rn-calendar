import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Calendar } from 'react-native-calendars';  

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.Title}>
        My Personal Calendar</Text>
      <Calendar
        style={styles.calendar}
        // Customize the calendar appearance
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: '#d6d7da',
          paddingBottom: 10,
          marginBottom: 10,
        }}
        // Customize the calendar theme
        theme={{
          monthTextColor: '#ffffff',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 20,
          todayTextColor: '#f53100',
          selectedDayBackgroundColor: '#f53100',
          selectedDayTextColor: '#ffffff',
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f023a',
    paddingTop:50,
    paddingHorizontal: 20,
  },
  calendar:{  
    backgroundColor:'transparent',
  },
  Title:{
    color: '#fff',
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }

});
