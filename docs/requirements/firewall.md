# What are the Firewall Requirements?

Dedicated devices are often behind corporate firewalls, preventing Esper's backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

| FQDNs                                 | Ports                           | Features                                                                    
|---------------------------------------|---------------------------------|------------------------------------------------------------------------------------------|
| *.amazonaws.com                       | TCP: 443 (HTTPS), TCP: 8883 (MQTT)                   | For provisioning, app management and device management                                   |
|  mqtt.shoonyacloud.com |       TCP: 1883 (MQTT)                 | For MQTT communication with devices                                                          |                                                         |
| services.shoonyacloud.com           |TCP: 443 (HTTPS)     | Provisioning services and Remote Viewer APK                                        |
| turn.shoonyacloud.com              | TCP/UDP: 3478 (SCTP), TCP/UDP: 5349 (SCTP),  UDP: 49152 - 65535                | For Remote Viewer and Remote Control services                                                            |
| dpcdownloads.esper.cloud              | TCP: 443 (HTTPS)| For the 6-tap QR code method of provisioning and Remote Viewer APK                       |
| [customer endpoint].esper.cloud       | TCP: 443 (HTTPS)                            | Grants access to the Esper Console when operating under a network with a restricted outbound firewall                                                                        |
| [customer endpoint]-api.esper.cloud   | TCP: 443 (HTTPS)                      | For communicating from the device to the Esper Endpoint. (example: device status events and command success/failure messages) |
| mqtt-telemetry-prod.esper.cloud       | TCP: 1883 (MQTT)                     | Deep telemetry from devices                                                              |
| IP: 13.52.132.230          |  TCP: 40000 - 50000 | For allowing secure remote ADB access to your devices                       |
| firebaseinstallations.googleapis.com and fcm.googleapis.com| TCP: 443 (HTTPS), TCP: 5228 (HTTPS), TCP: 5229 (HTTPS), TCP: 5230 (HTTPS)  | Backup channel, also used for ping command to wake up a device (Only for GMS devices)       |
| IP: 8.8.8.8                           |	TCP: 443 (HTTPS)                   |	For verifying internet connectivity on the device                             |

:::tip
For static IP, please get in touch with Esper
:::
