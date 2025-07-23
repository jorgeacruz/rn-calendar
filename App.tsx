import { use, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';  

// Importing the Portuguese locale configuration
import { ptBR } from './utils/localecalendarConfig';
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function App() {

  const [day, setDay] = useState<DateData>();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [selected, setSelected] = useState();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.Title}>
        Calendário Personalizado</Text>
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
          selectedDayTextColor: '#ff0000',
          arrowColor: '#ffffff',
          calendarBackground:'transparent',

          textDayStyle: {
            color: '#ffffff',
          },
          textDisabledColor: '#999',

          arrowStyle:{
            marginHorizontal: 10,
          }
          
        }}

        // Disable past dates
        minDate={new Date().toISOString().split('T')[0]} 
        hideExtraDays={true}

        // Set the initial date
        onDayPress={setDay}
        // handle date selection
        markedDates={
          day && {
            [day.dateString]: {selected: true, marked: true, selectedColor: '#fff' }
          }
        }

        
        />
        <View style={{alignItems:'center'}}>
          <Text  style={styles.dateSelected}>
            { 
              day 
                ? ` ${(() => {
                      const [year, month, date] = day.dateString.split('-');
                      return `${date}-${month}-${year.slice(2)}`;
                  })()}`
                : 'Nenhuma data selecionada'
            }
          </Text>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop:100,
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
  },
  dateSelected: {
    marginTop: 20,
    borderRadius: 5,
    width:'50%',
    paddingVertical: 20,
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor:'#fff'
  },

});
