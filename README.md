# AQM Full Stack Developer Test  (Angular and ExpressJS)

Full Stack Developer Test (Angular and ExpressJS)

Please create a fork of this repository and solve any ONE of the two problem statements below. You can pick either *PS1* OR *PS2*, but whichever you pick, you need to finish all three tasks listed under it.

The backend code will go under the `backend` folder, and frontend code under `frontend` folder.

When you are done, please submit a link to your forked repo to the HR representative you are in touch with.
---

## PS1: Virtual Coffee Shop (Full Stack)

#### Task 1: Inventory Management REST API (NestJS)

**Objective**:  
Create a RESTful API with NestJS to manage a coffee shop's inventory. The coffee shop sells different types of coffee and also offers add-ons like milk, sugar, and flavors.

**Requirements**:

- Create entities for `CoffeeType` and `AddOns`.
- Implement CRUD operations for managing these entities.
- Implement an endpoint to calculate the total price of a coffee order.

#### Task 2: Coffee Customization UI (ReactJS)

**Objective**:  
Build a ReactJS application that allows customers to customize their coffee using the inventory data from the API.

**Requirements**:

- Fetch the available `CoffeeType` and `AddOns` from the API.
- Allow the user to customize their coffee by selecting a type and any add-ons.
- Show the total price dynamically as the user selects/unselects options.

#### Task 3: Complex Order API Endpoint and UI Integration (Full Stack)

**Objective**:  
Extend the API and the UI to support "Complex Orders" which consist of multiple coffees with various customizations.

**Requirements**:

- Create an entity for `ComplexOrder` which can hold multiple coffees and their respective customizations.
- Implement an API endpoint to place a `ComplexOrder`.
- Update the ReactJS UI to allow placing `ComplexOrder` and show the total cost.

#### Bonus:

- Secure the API endpoints using JWT-based authentication.
- Use WebSockets to notify the ReactJS application in real-time when the inventory updates.
- Implement end-to-end tests to validate the application functionality.

---

## PS2: Event Scheduler and Notifier (Full Stack)

#### Task 1: Event Scheduling API (NestJS)

**Objective**:  
Develop a RESTful API using NestJS for scheduling and managing events.

**Requirements**:

- Create an `Event` entity with fields for `id`, `title`, `description`, `startTime`, `endTime`, and `participants`.
- Implement CRUD operations for managing `Event` entities.
- Create an API endpoint that, given a time range, lists all events occurring within that period.

#### Task 2: Event Management UI (ReactJS)

**Objective**:  
Develop a ReactJS application that enables users to manage their events.

**Requirements**:

- Use a calendar-like interface to display events. 
- Allow users to create, update, and delete events via this interface.
- Allow users to filter events by selecting a time range, and then call the appropriate API endpoint to fetch the filtered events.

#### Task 3: Real-Time Notifications (Full Stack)

**Objective**:  
Extend the API and the UI to send real-time notifications to users when an event is about to start.

**Requirements**:

- Implement a real-time notification system using WebSockets or another real-time technology.
- When an event is 10 minutes away from starting, a notification should appear in the ReactJS application.

#### Bonus:

- Add the ability to mark events as "completed" or "cancelled" and reflect this status both in the API and UI.
- Implement authentication and allow users to only manage their own events.
- Write end-to-end tests to validate the entire functionality.
