import { StyleSheet, Text, View, Image } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom DashBoard</Text>
      <StatCard
        title="Total Users "
        image={require('./assets/user.png')}
        value="1,240"
        bgColor="#5DA2C0"
      />
      <StatCard
        title="Revenue "
        image={require('./assets/revenue.png')}
        value="$12,450"
        bgColor="#5DC07B"
      />
      <StatCard
        title="Pending Issues "
        image={require('./assets/pending.png')}
        value="3"
        bgColor="#BF645F"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1f2937',
    textAlign: 'center',
  }
});