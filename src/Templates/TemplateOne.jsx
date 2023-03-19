import { React } from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { Template1 } from "./Style";
import img from "./original.jpg";

const TemplateOne = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={Template1.page}>
          <View style={Template1.sectionLeft}>
            <Image src={img} style={Template1.img} />
            <Text>karthi</Text>
            <View style={Template1.details}>
              <Text style={Template1.Title}>Details</Text>
              <View style={Template1.items}>
                <Text>825565895</Text>
                <Text>karthi@gamil.com</Text>
                <Text>India</Text>
                <Text>Coimb</Text>
              </View>
            </View>
          </View>
          <View style={Template1.sectionRight}></View>
        </View>
      </Page>
    </Document>
  );
};

export default TemplateOne;
