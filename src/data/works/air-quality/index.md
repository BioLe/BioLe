---
title: Air Quality Monitoring
date: "2020-05-06T23:46:37.121Z"
category: Internet of Things
tags: ['IoT', 'Dashboard', 'Innovation']
image: './thumb2.jpg'
stack: ['MicroPy', 'Orion', 'NodeRed', 'ESP32']
description: "Dashboard that tracks the Lisbon (Portugal) air quality. Data is collected through a moving TTGO ESP32 device that communicates via LoRa with an API built in NodeRed."  
---

# Architecture

![home](/imgs/iot_arq2.png)

The project is split into four relevant sections:

1. **Hardware**: a laser dust detection sensor, used for continuos and real-time detection of dust in the air was connected to a ESP32 board which includes a GPS sensor.

2. **Network**: the board communicates with the Low Powered Wide Area Network (LPWAN) **LoRa**, due to its range of 15Km (5km in urban scenarios) and low power consumption. Data from the device is received by the multiple public gateway available in [The Things Network](https://www.thethingsnetwork.org/).

3. **Backend**: Information is sent from the TTN to our Node-Red backend, where the data is processed and displayed to the user.

4. **Frontend** a dashboard split into two views generic and detailed.

# Dashboard

The generic dashboard allows the user to:

- Track the position of all the available devices through the map
- Observe the devices currently deployed and their metadata (Status, Name, Uptime, Position and Battery Level)
- An evolution of the multiple Particle Matters (PM) over the last 28 days (subtracting the average of the last 28 days with the average of the current day)
- The gauges display the Average, Minimum and Maximum values for the PM chosen over the period of days also selected by the user
- Lastly, line graphs that display the average values (Avg, Min, Max) for the last hour for all of the devices

![home](/imgs/home.png)

It is also possible to keep up with the devices individually, allowing us too see:

- Path taken during operation
- Real time temperature levels
- Device metadata
- Real time measurements of the different particles tracked (PM 1.0, 2.5 and 10)
- All the information received for the particles during the last 24 hours, in 5 minute increments

![detailed](/imgs/detailed.png)

# Dashboard updates

Each dashboard is updated in a different manner. The home dashboard, which includes only aggregated information over multiple days does not require real time information, as such, data is updated through Polling with a periodicity of 1 hour or every time the user refreshes the page.

![coms](/imgs/coms.png)

On the other hand, as the user requires real time information when tracking individual devices a Publish/Subscribe broker was introduced, this way every time new information is received from the gateways a notification is sent to the dashboards and data is updated in realtime.

![pubsub](/imgs/pubsub.png)

A subscription was created for the device, that notifies every time something changers such as battery level or location. And a second subscription dedicated to the air quality observed.
