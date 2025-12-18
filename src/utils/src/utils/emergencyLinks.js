import { Linking, Platform } from "react-native";

export const EMERGENCY_NUMBER_ID = "119"; // Indonesia PSC 119 / SPGDT

export function buildEmergencyPacket({
  symptomLabel,
  locationText,
  timestamp,
  modeLabel,
  notes,
}) {
  return (
    `🚨 GO FIT 360 EMERGENCY\n` +
    `Symptom: ${symptomLabel}\n` +
    `Time: ${timestamp}\n` +
    `Mode: ${modeLabel}\n` +
    `Location: ${locationText || "Unknown"}\n` +
    (notes ? `Notes: ${notes}\n` : "") +
    `Action: Please activate emergency pathway / cathlab routing if suspected ACS.`
  );
}

export async function openDialer(number = EMERGENCY_NUMBER_ID) {
  const url = Platform.select({
    ios: `telprompt:${number}`,
    android: `tel:${number}`,
    default: `tel:${number}`,
  });
  return Linking.openURL(url);
}

export async function openMaps(lat, lng, label = "Emergency Route") {
  if (lat == null || lng == null) throw new Error("Missing coords");
  const url = Platform.select({
    ios: `http://maps.apple.com/?ll=${lat},${lng}&q=${encodeURIComponent(label)}`,
    android: `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(label)})`,
    default: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
  });
  return Linking.openURL(url);
}

export async function openWhatsApp(text) {
  const url = `whatsapp://send?text=${encodeURIComponent(text)}`;
  const can = await Linking.canOpenURL(url);
  if (!can) throw new Error("WhatsApp not available");
  return Linking.openURL(url);
}

export async function openSMS(text) {
  const url = Platform.select({
    ios: `sms:&body=${encodeURIComponent(text)}`,
    android: `sms:?body=${encodeURIComponent(text)}`,
    default: `sms:?body=${encodeURIComponent(text)}`,
  });
  return Linking.openURL(url);
}
