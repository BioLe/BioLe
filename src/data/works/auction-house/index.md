---
title: Acquirely
date: "2018-11-20T23:46:37.121Z"
category: Fullstack
tags: ['Auctions', 'Web application', 'WebSocket']
image: './thumb.webp'
stack: ['Java Server Pages', 'Spring MVC', 'AWS EC2', 'WebSocket']
description: "Auction website with real time transactions through the use of websockets."  
---

# Introduction

Acquire.ly is a online auction website with support for realtime bidding, built with Spring MVC and hosted in AWS EC2. 

# Implementation

The authentication and registration was implemented manually, without external APIs.

![sign-up](/imgs/sign-up.png)

After authentication that user is prompted to the home page where all the ads are displayed, which can be filtered by categories and ordered by price.

![product](/imgs/product-page.png)

To user also has the option to add products by specifying the product details as shown in the following figure.

![add-product](/imgs/add-product.png)

Price information can be tracked in realtime through WebSockets. The client initiates a connection to the server indicating the listings he is interested in (information which is stored in the cookies), and a connection is created which keeps sending information until it is closed, which removes the need for long-polling applications.

![realtime](/imgs/realtime-auctions.png)

It is also possible to see product pages, which include details about the product such descriptions, images, videos and even music. 

![product](/imgs/product-page-simple.png)

The application has includes a back office section where an admin can manage listings, with the following functionalities available:

- Alter user roles
- Delete user accounts
- Add new options for auctions (e.g., new auction durations)
- Add new categories
- Verify user accounts

![backoffice](/imgs/backoffice.png)
