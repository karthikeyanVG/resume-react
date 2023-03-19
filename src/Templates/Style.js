import { StyleSheet } from "@react-pdf/renderer";

export const Template1 = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        color: "white"
    },
    sectionLeft: {
        backgroundColor: "#2c315e",
        width: "35%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: " 20px 0px"
    },
    details: {

    },
    Title: {
        fontSize: "20px",
        fontWeight: "heavy",
        color: "black",
    },
    items: {
        fontSize: "15px"
    },
    sectionRight: {
        width: "65%",
        height: "100vh"
    },
    img: {
        height: "90px",
        width: "90px",
        borderRadius: "50%"

    },

});

