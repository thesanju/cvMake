import { StyleSheet } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  expTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  expCompany: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  expDate: {
    fontSize: 10,
  },
  expDescription: {
    fontSize: 10,
    marginTop: 3,
  },
});

export default pdfStyles;