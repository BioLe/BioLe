---
title: 15 Minute City
tags: ['Real Estate', 'Dashboard', 'Microservices', 'Scraping']
category: Fullstack
image: './thumb2.jpg'
date: "2021-08-18T22:12:03.284Z"
stack: ['Kubernetes', 'Docker', 'Spring Boot', 'Prometheus', 'Grafana', 'MongoDB', 'PostgreSQL', 'PostGIS', 'AWS DyanmoDB', 'AWS Cognito', 'Elastic Search', 'Redis', 'Java', 'Python', 'NGINX', 'React', 'Leaflet', 'MapBox']
description: "A new way of discovering real estate through the 15-Minute City concept."
---

# Introduction

The 15-Minute City concept thinks of cities as hubs where most people, if not all, are able to tend their needs within a short walk or bike ride from their home. For this, six social functions have been considered as minimum requirements: home, work, commerce, healthcare, education, and entertainment.

The application tries to help the user find a new home, conjugating his needs with the concept requirements.

# Architecture

![test](/imgs/arc_overview.png)

The development was split into three important sections: data gathering, a microservice backend and a frontend.

## Data Gathering

To obtain the data to sustain the application, it required scraping of real estate agencies websites (e.g., [remax](https://www.remax.pt/)) and real estate aggregators (e.g., [idealista](https://www.imovirtual.com/)). Also, to allow for an easier expansion all of the components of the extraction were split into multiple jobs, all hosted in different [Kubernetes](https://kubernetes.io/) pods.

![test](/imgs/Arq_Scraping_Fixed.png)

This way, we have dedicated machines gathering listing URLs and sending them to a queue waiting to be requested. The URLs are then read, data is extracted via XPATH and stored in a new queue. In the last phase, the listings are validated, processed, and stored in an SQL database.

## Backend

The backend is split into multiple microservices which communicate with the exterior via REST or between themselves via Kafka.

1. **Auth** -- Responsible for authentication of the user with the platform, also responsible for the management of API keys to access the API Gateway.
2. **User** -- Managing user information.
3. **Metrics** -- The index that quantifies the relation between the user needs and the 15-minute city concept.
4. **Parameter** -- Responsible for storing information related to points of interest of the multiple locations (e.g., gardens, hospitals, cinema).
5. **Search** -- Logic behind the search bar, it uses Elastic Search for faster text retrieval.
6. **Estate** -- Deals with all the estate information scraped in the previous step, as such, it shares the same database. 

![test](/imgs/Tese_Scrapper-Arq. Artigo.png)

To ensure that wellbeing of the services and guarantee a great user experience, all the services expose metrics constantly scraped by [Prometheus](https://prometheus.io/) and monitored in [Grafana](https://grafana.com/).

![test](/imgs/grafana-dashboard.png)

## Frontend

The frontend was created with [ReactJS](https://reactjs.org/), and is **still under development**. Currently the product page displays information about the chosen location, such as: type (municipality, parish, city, NUT), average price, index value according to the 15 minute city concept.

The second section displays all the available estates in the chosen location. And finally, some information about the estates present in the area: most common features and bedrooms per house (the portuguese way of listing estates).

![test](/imgs/ui_placeholder_2.png)



