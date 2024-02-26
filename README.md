# PIKPET- "A communication website for saving lives and easing accessibility to animal shelters"
<img width="200" alt="image" src="https://velog.velcdn.com/images/yooonwodyd/post/0c3dce86-1598-42fa-a099-4a795e75a08b/image.png">


## Table of Contents
- [About PIKPET](#About_PIKPET)
- [Components](#components)
- [Function](#function)
- [Upcoming updates](#upcoming_updates)
- [How to run](#How_to_run)

## About PIKPET
<img width="200" alt="image" src="https://velog.velcdn.com/images/yooonwodyd/post/f0cb98b8-69ec-4e84-879b-275e8ae7e675/image.png">
A website for unified adoption applications for stray dogs, allowing easy connection for applications across different institutions and facilitating bidirectional communication with various certified breeders.

### Our goal
![image](https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-BE/assets/112597963/58a7eb89-8ccc-4af3-9e7e-782b5b65e8ee)

Over 90% of the puppies distributed in South Korea go through what are colloquially known as "pet shops." These pet shops are closely linked to illegal groups commonly referred to as "puppy mills."

Puppies over 5 months old are considered to have no commodity value and are disposed of. Female dogs are often sold back to puppy mills to breed more puppies, while male dogs are commonly used as food ingredients.

**We have set a major goal to become an alternative to the unethical infrastructure of the pet industry, including puppy mills, by increasing accessibility to shelters and breeders.**


## Components
### Frontend
```
(프론트엔드 기술 스택 넣어주세요)
```

### Backend
https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-BE
```
Java 17
Spring Boot 3.1.8
MySQL 8.0
```

### DevOps
```
Docker
Github Actions
Google Cloud Platforms
```


## Function
### Login
![login](https://velog.velcdn.com/images/yooonwodyd/post/f8b40454-f090-46f8-9407-15b1ad76a269/image.gif)
### Recommend similar rescued animals by comparing breeds, colors, and sizes through images
![](https://velog.velcdn.com/images/yooonwodyd/post/66e7b2f3-ce2b-457f-bdc4-36ae26f65d39/image.gif)
### Search popular categories
![](https://velog.velcdn.com/images/yooonwodyd/post/21489601-ebff-453e-b051-21f1a569e83c/image.gif)
### Application submission
![](https://velog.velcdn.com/images/yooonwodyd/post/570f01f5-10e3-4974-8769-4356ed22c739/image.gif)
### View detailed information about dogs
![](https://velog.velcdn.com/images/yooonwodyd/post/df815d40-2583-4fc1-b85f-be4bb73ab5b6/image.gif)


## upcoming_updates
### Implementation of notification service using Firebase
Before visiting a shelter, we use Firebase to receive notifications from the shelter. This allows users to receive updates on animals they have expressed interest in.
### Addition of Breeder Certification System
Especially for breeders, there is also an opinion that they cannot be trusted, as the operators of puppy mills can pretend to be professional breeders without requiring specific qualifications.
we aim to manage the transaction records of breeders to determine if they are certified users.





## How to Run
### Frontend
1. node.js (버전 적어주세요)version install
2. run `git clone https://github.com/GDSC-KNU/3rd-sc-5-PIKPET-FE`
3. Create a file called .env on the path to 3rd-sc-5-PIKPET-FE
4. run `npm install`
5. run `npm run dev`
6. Access localhost:5173
7. Login test user (id: test@test, pw: test)

   
### Backend
It is currently on the server. When running a frontend project, it is connected to a backend server.
