import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable, Alert, Share } from "react-native";
import PanicButton from "../components/PanicButton";
import { buildEmergencyPacket, openDialer, openMaps, openWhatsApp, openSMS } from "../utils/emergencyLinks";

// Best-effort: kalau Expo Location ada, pakai. Kalau tidak ada, tetap jalan (offline/manual).
let ExpoLocation = null;
try {
  // eslint-disable-next-line global-require
  ExpoLocation = require("expo-location");
} catch (e) {
  ExpoLocation = null;
}

const SYMPTOMS = [
  { key: "cp", icon: "💔", label: "Chest pain / cold sweat" },
  { key: "sob", icon: "😮‍💨", label:
