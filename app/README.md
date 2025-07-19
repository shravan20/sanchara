# Sanchara Proof of Concept version

Objective: P2P crowd driven traffic management & traffic reporting app that works initially over the internet using mobile devices (Android)

Tech stack:

1. Mobile Application (Discarded PWA since Web APIs arent available for our usecase specifically):
   - Native Android using Kotlin
     - Known variable:
       - Full hardware control
       - Battery and privacy control
       - Native APIs available
       -
     - Unknown variable:
       - Unsure how difficult to setup and manage multiplatform app development
       - Complexity unknown
       - Community support unknown
       - Too much of repitition (based on research)

2. Backend (flexible to move to any other options too)
   - Golang (fuego/fiber)

---------------------------------------------

POC Plan:

1. setup WebRTC Data Channels
   a. enable device-to-device communication using the internet
   b. peer discovery and signaling via backend

Note: Non internet versions MVP to be done later to support offline use cases

MVP Plan:

2. MVP UI to enable quick report submission and show latest traffic updates and share it:
    a. map or simple list to display reports
    b. basic status indicators for connectivity
    c. form to submit a new report.
    d. simple map view based on traffic data

3. Integration of POC functionality with MVP UI
