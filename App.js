import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AboutScreen from './AboutScreen';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={{ marginRight: 16 }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>About</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [results, setResults] = useState({
    pay: '',
    overtimePay: '',
    totalPay: '',
    tax: '',
  });

  const calculatePayroll = () => {
    try {
      const hours = parseFloat(hoursWorked);
      const rate = parseFloat(hourlyRate);
      const tax = parseFloat(taxRate);

      if (isNaN(hours) || isNaN(rate) || isNaN(tax)) {
        clearResults();
        return;
      }

      let pay, overtimePay, totalPay, taxAmount;

      if (hours <= 40) {
        pay = hours * rate;
        overtimePay = 0.0;
      } else {
        pay = 40 * rate;
        overtimePay = (hours - 40) * rate * 1.5;
      }

      totalPay = pay + overtimePay;
      // Tax should be calculated on total pay (base pay + overtime pay)
      taxAmount = (totalPay * tax) / 100;

      setResults({
        pay: pay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        totalPay: totalPay.toFixed(2),
        tax: taxAmount.toFixed(2),
      });
    } catch (e) {
      clearResults();
    }
  };

  const clearResults = () => {
    setResults({
      pay: '',
      overtimePay: '',
      totalPay: '',
      tax: '',
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="auto" />
      
      {/* Input Section */}
      <Text style={styles.sectionTitle}>Input</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Hours Worked"
        keyboardType="decimal-pad"
        value={hoursWorked}
        onChangeText={setHoursWorked}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Hourly Rate"
        keyboardType="decimal-pad"
        value={hourlyRate}
        onChangeText={setHourlyRate}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Tax Rate (%)"
        keyboardType="decimal-pad"
        value={taxRate}
        onChangeText={setTaxRate}
      />
      
      <TouchableOpacity style={styles.button} onPress={calculatePayroll}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {/* Results Section */}
      <Text style={styles.sectionTitle}>Results</Text>
      
      <View style={styles.resultsContainer}>
        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Pay:</Text>
          <Text style={styles.resultValue}>
            {results.pay ? `$${results.pay}` : ''}
          </Text>
        </View>
        
        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Overtime Pay:</Text>
          <Text style={styles.resultValue}>
            {results.overtimePay ? `$${results.overtimePay}` : ''}
          </Text>
        </View>
        
        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Total Pay:</Text>
          <Text style={styles.resultValue}>
            {results.totalPay ? `$${results.totalPay}` : ''}
          </Text>
        </View>
        
        <View style={styles.resultRow}>
          <Text style={styles.resultLabel}>Tax:</Text>
          <Text style={styles.resultValue}>
            {results.tax ? `$${results.tax}` : ''}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="PayrollCalculator"
          component={MainScreen}
          options={{
            title: 'Payroll Calculator',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 4,
    marginTop: 8,
  },
  resultRow: {
    marginBottom: 8,
  },
  resultLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 16,
    color: '#333',
  },
});

