import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ClientsScreen() {
  // Coordenadas de ejemplo (puedes cambiarlas por las coordenadas reales del dispositivo)
  const [deviceLocation] = useState({
    latitude: 19.4326,  // Ciudad de México (ejemplo)
    longitude: -99.1332,
    zoom: 15,
  });

  // HTML para el mapa interactivo con Leaflet
  const mapHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        body { margin: 0; padding: 0; }
        #map { height: 100vh; width: 100vw; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map').setView([${deviceLocation.latitude}, ${deviceLocation.longitude}], ${deviceLocation.zoom});
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19
        }).addTo(map);
        
        // Marcador personalizado
        var blueIcon = L.icon({
          iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMEMxMC40NzcgMCA2IDQuNDc3IDYgMTBDNiAxNy41IDE2IDMwIDE2IDMwQzE2IDMwIDI2IDE3LjUgMjYgMTBDMjYgNC40NzcgMjEuNTIzIDAgMTYgMFoiIGZpbGw9IiMzYjgyZjYiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjEwIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
          iconSize: [32, 48],
          iconAnchor: [16, 48],
          popupAnchor: [0, -48]
        });
        
        var marker = L.marker([${deviceLocation.latitude}, ${deviceLocation.longitude}], {icon: blueIcon})
          .addTo(map)
          .bindPopup('<b>Pulsera SafeTrack</b><br>Ubicación actual del dispositivo')
          .openPopup();
        
        // Círculo de precisión
        var circle = L.circle([${deviceLocation.latitude}, ${deviceLocation.longitude}], {
          color: '#3b82f6',
          fillColor: '#3b82f6',
          fillOpacity: 0.1,
          radius: 50
        }).addTo(map);
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubicación en Tiempo Real</Text>
      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: mapHTML }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      <Text style={styles.infoText}>
        📍 Precisión: ±5 metros | Última actualización: Ahora
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#e9ecef',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dee2e6',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
});
