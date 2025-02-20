import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import pdfStyles from '../styles/pdfStyles';

const ResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.header}>{data.name || 'Your Name'}</Text>
        <Text style={pdfStyles.contactInfo}>
          {data.email ? `${data.email} • ` : ''}
          {data.phone ? `${data.phone} • ` : ''}
          {data.location || ''}
        </Text>
      </View>

      {data.summary && (
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Summary</Text>
          <Text>{data.summary}</Text>
        </View>
      )}

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Experience</Text>
        {data.experience && data.experience.map((exp, i) => (
          <View key={i} style={pdfStyles.experienceItem}>
            <Text style={pdfStyles.expTitle}>{exp.title}</Text>
            <Text style={pdfStyles.expCompany}>{exp.company}</Text>
            <Text style={pdfStyles.expDate}>{exp.startDate} - {exp.endDate}</Text>
            <Text style={pdfStyles.expDescription}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Education</Text>
        {data.education && data.education.map((edu, i) => (
          <View key={i} style={pdfStyles.experienceItem}>
            <Text style={pdfStyles.expTitle}>{edu.degree}</Text>
            <Text style={pdfStyles.expCompany}>{edu.institution}</Text>
            <Text style={pdfStyles.expDate}>{edu.year}</Text>
          </View>
        ))}
      </View>

      {data.skills && (
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Skills</Text>
          <Text>{data.skills}</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;