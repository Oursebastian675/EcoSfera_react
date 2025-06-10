import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#FFFFFF'
    },
    header: {
        marginBottom: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000'
    },
    tableRow: {
        flexDirection: 'row'
    },
    tableCell: {
        padding: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000'
    },
    total: {
        marginTop: 20,
        textAlign: 'right',
        fontSize: 16
    }
});

const FacturaPDF = ({ datosVenta, resultadoVenta, cartItems, total }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>EcoSfera</Text>
                <Text style={styles.subtitle}>Factura de Compra</Text>
            </View>
            
            <View style={styles.section}>
                <Text>ID de Venta: {resultadoVenta.id}</Text>
                <Text>Fecha: {new Date().toLocaleDateString()}</Text>
                <Text>\n</Text>
                <Text>Cliente:</Text>
                <Text>{datosVenta.nombre} {datosVenta.apellido}</Text>
                <Text>{datosVenta.tipoDocumento}: {datosVenta.numeroDocumento}</Text>
                <Text>Dirección: {datosVenta.direccion}</Text>
                <Text>Teléfono: {datosVenta.telefono}</Text>
            </View>

            <View style={styles.section}>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { width: '40%' }]}>
                            <Text>Producto</Text>
                        </View>
                        <View style={[styles.tableCell, { width: '20%' }]}>
                            <Text>Cantidad</Text>
                        </View>
                        <View style={[styles.tableCell, { width: '20%' }]}>
                            <Text>Precio Unit.</Text>
                        </View>
                        <View style={[styles.tableCell, { width: '20%' }]}>
                            <Text>Subtotal</Text>
                        </View>
                    </View>
                    {cartItems.map((item) => (
                        <View style={styles.tableRow} key={item.id}>
                            <View style={[styles.tableCell, { width: '40%' }]}>
                                <Text>{item.nombre}</Text>
                            </View>
                            <View style={[styles.tableCell, { width: '20%' }]}>
                                <Text>{item.quantity}</Text>
                            </View>
                            <View style={[styles.tableCell, { width: '20%' }]}>
                                <Text>${item.precio.toLocaleString()}</Text>
                            </View>
                            <View style={[styles.tableCell, { width: '20%' }]}>
                                <Text>${(item.quantity * item.precio).toLocaleString()}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                
                <View style={styles.total}>
                    <Text>Total: ${total.toLocaleString()}</Text>
                </View>
                
                <Text style={{ marginTop: 30 }}>Método de Pago: {datosVenta.metodoPago}</Text>
            </View>
        </Page>
    </Document>
);

export default FacturaPDF;