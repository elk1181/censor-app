import React, { useState } from "react";
import { render, Document, Text } from 'redocx'

  render() {
    return (
      <Document>
        <Text>Hello World</Text>
      </Document>
    )
  }


render(<App />, `${__dirname}/example.docx`)
