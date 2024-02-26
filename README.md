<img width="200" alt="image" src="https://velog.velcdn.com/images/yooonwodyd/post/0c3dce86-1598-42fa-a099-4a795e75a08b/image.png">

# PIKPET - "A communication website for saving abandoned pets and making easier to accessible to pet shelters"

## Table of Contents
- [About PIKPET](#About_PIKPET)
- [Components](#components)
- [Function](#function)
- [Upcoming updates](#upcoming_updates)
- [How to run](#How_to_run)

## About PIKPET
<img width="200" alt="image" src="https://velog.velcdn.com/images/yooonwodyd/post/f0cb98b8-69ec-4e84-879b-275e8ae7e675/image.png">
A website for unified adoption applications for abandoned pets (dogs), allowing easy connection for applications across different institutions and facilitating bidirectional communication with various certified breeders.

### Our goal
![image](https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-BE/assets/112597963/58a7eb89-8ccc-4af3-9e7e-782b5b65e8ee)

Over 90% of the puppies distributed in South Korea go through what are colloquially known as "pet shops." These pet shops are closely linked to illegal groups commonly referred to as "puppy mills."

Puppies over 5 months old are considered to have no commodity value and are disposed of. Female dogs are often sold back to puppy mills to breed more puppies, while male dogs are commonly used as food ingredients.

**We have set a major goal to become an alternative to the unethical infrastructure of the pet industry, including puppy mills, by increasing accessibility to shelters and breeders.**


## Components
### Frontend
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&labelColor=white) 
![npm](https://img.shields.io/badge/npm-10.2.3-CB3837?style=flat-square&logo=npm&labelColor=white) 
![Zustand](https://img.shields.io/badge/Zustand-4.5.0-black?style=flat-square&labelColor=white) 
![styled-components](https://img.shields.io/badge/styled_components-6.1.8-black?style=flat-square&logo=styled-components&logoColor=white&labelColor=DB7093) 

### Backend
https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-BE  
![Java](https://img.shields.io/badge/java-17-007396?style=flat-square&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1.8-6DB33F?style=flat-square&logo=springboot&logoColor=6DB33F) 
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=MySQL&logoColor=white)

### DevOps
```
Docker
Github Actions
Google Cloud Platforms
```


## Functions
### Login
![login](https://velog.velcdn.com/images/yooonwodyd/post/f8b40454-f090-46f8-9407-15b1ad76a269/image.gif)
### Searching with an image: Recommendation of pets that look similar by comparing breeds, colors, sizes, etc.
![](https://velog.velcdn.com/images/yooonwodyd/post/66e7b2f3-ce2b-457f-bdc4-36ae26f65d39/image.gif)
### Searching by filters: Searching popular categories
![](https://velog.velcdn.com/images/yooonwodyd/post/21489601-ebff-453e-b051-21f1a569e83c/image.gif)
### Appling for adoption
![](https://velog.velcdn.com/images/yooonwodyd/post/570f01f5-10e3-4974-8769-4356ed22c739/image.gif)
### Viewing details of the pet
![](https://velog.velcdn.com/images/yooonwodyd/post/df815d40-2583-4fc1-b85f-be4bb73ab5b6/image.gif)


## upcoming_updates
### Implementation of notification service using Firebase
Before visiting a shelter, we use Firebase to receive notifications from the shelter. This allows users to receive updates on animals they have expressed interest in.
### Addition of Breeder Certification System
Especially for breeders, there is also an opinion that they cannot be trusted, as the operators of puppy mills can pretend to be professional breeders without requiring specific qualifications.
we aim to manage the transaction records of breeders to determine if they are certified users.


## How to Run
### Frontend
1. Install **node.js v.21.1.0**
2. Run `git clone https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-FE`  
3. Create a **.env file** to set invironment variables on the path `/3rd-sc-5-PIKPET-FE`
4. Run `npm install`
5. Run `npm run dev`
6. Access to **localhost:5173**
7. Login with the test account (E-mail: **test@test**, Password: **test**)

   
### Backend
It is currently on the server. You don't need to run the backend server seperately because the frontend server is connected to the backend server. 
