# Blockchain Project Prototype

## Project Structure

This project contains both frontend and backend components. The frontend is built with Vue.js, and the backend is built with Node.js. Please keep in mind that configuration files are included for the sake of understanding but should never be uploaded to GitHub unless intended.

## Setup Instructions

### Step 0: Download or Clone the Project

Clone or download this project to your local machine.

### **Backend Setup**

### Step 1: Install Node.js and NPM

Make sure you have Node.js and NPM (Node Package Manager) installed on your machine. If not, you can download and install them from [https://nodejs.org/](https://nodejs.org/). Follow the installation instructions for your specific operating system.

### Step 2: Truffle and Ganache Setup

To interact with the blockchain, we are using Truffle and Ganache. Here are the steps to set them up:

#### Truffle Setup

1. Open your terminal or command prompt.
2. Install Truffle globally by running the following command:

    ```
    npm install -g truffle
    ```

3. Verify that Truffle is installed correctly by checking its version:

    ```
    truffle version
    ```

#### Ganache Setup

Ganache is a local blockchain development environment. Follow these steps to set it up:

**CLI Version**

1. Open your terminal or command prompt.
2. Install Ganache globally by running the following command:

    ```
    npm install -g ganache-cli
    ```

3. Verify that Ganache is installed correctly by checking its version:

    ```
    ganache-cli --version
    ```

4. Run Ganache to start a local Ethereum blockchain network:

    ```
    ganache-cli
    ```

    This will start a local blockchain network on port 8545. It will also provide 10 accounts with 100 ETH in each account. You can use these accounts to interact with the blockchain. (This will be used in the frontend part of the project.)

**GUI Version**

1. Visit the Ganache website: [https://www.trufflesuite.com/ganache](https://www.trufflesuite.com/ganache)
2. Download and install Ganache for your operating system.
3. Run Ganache to start a local Ethereum blockchain network.

#### Step 3: Configure Backend

1. Navigate to the node-backend folder.

2. Install backend dependencies by running the following command inside the backend folder:

    ```
    npm install
    ```

3. Build the truffle project by running the following command inside the backend folder:

    ```
    truffle compile
    ```

4. Migrate the truffle project by running the following command inside the backend folder:

    ```
    truffle migrate
    ```

    once the migration is complete, you can see the network ID in the logs. Copy the network ID and paste it in the `.env` file in the `NETWORK_ID` field.

5. Start the backend server:

    ```
    npm start
    ```

The backend server should now be running on the specified port, and you can access it through `http://localhost:3000` (or the port you specified in the `.env` file).

### **Frontend Setup**

1. Navigate to the frontend folder.

2. Install the dependencies by running the following command inside the frontend folder:

    ```
    npm install
    ```

3. Run the frontend server:

    ```
    npm run dev
    ```

    I am assuming that you are using the backend server on your local machine on port `3000`. If not you can change the port in the `config.development.js` file in the `VUE_APP_SERVER` field.

The frontend server should now be running on the specified port, and you can access it through `http://localhost:5000`

### How to Use

1. In your browser, navigate to `http://localhost:5000`.
2. You will see a login page. Click on the `Signup` link to register a new user.
3. You will be redirected to the signup page. Enter your details. There will be a `Patient address` field. You can use any of the 10 addresses provided by Ganache to create a patient account. (You can see the addresses in the Ganache GUI or in the terminal where you ran Ganache CLI.)
4. After signing up, you will be redirected to the login page. Enter your credentials to login. (Here you will use the email, password and the Patient address you entered in the signup page.)
