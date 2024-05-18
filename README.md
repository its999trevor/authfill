Sure, I'll update the README file to make it more specific and detailed for your Puppeteer login script. Here's the revised version:

```markdown
# Puppeteer Wi-Fi Login Script

This Node.js script utilizes Puppeteer to automate the authentication process for a Wi-Fi portal.

## Description

This script automates the process of connecting to a Wi-Fi network and logging into a Wi-Fi authentication portal using Puppeteer, a headless browser automation tool. It fills out the username and password fields and clicks the login button.

## Features

- Automatically connects to a specified Wi-Fi network.
- Automatically fills in username and password fields on the login page.
- Clicks the login button.
- Handles SSL certificate errors for local/internal sites.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm or yarn package manager installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/puppeteer-wifi-login-script.git
   ```

2. Navigate to the project directory:

   ```bash
   cd puppeteer-wifi-login-script
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Configure your credentials:

   - Rename the `.env.example` file to `.env`.
   - Update the `WIFINAME`, `WIFIPASSWORD`, `URI`, `USERNAME`, and `PASSWORD` variables in the `.env` file with your actual credentials.

   Example `.env` file:

   ```plaintext
   WIFINAME=yourWifiName
   WIFIPASSWORD=yourWifiPassword
   URI=https://192.168.100.1:6082/php/uid.php?vsys=1&rule=7&token
   USERNAME=yourUsername
   PASSWORD=yourPassword
   ```

2. Run the script:

   ```bash
   npm start
   ```

### Batch Script

Double-click the run-auth.bat file included in the repository to run the script.

### Configuration

You can customize the script further according to your requirements by editing the `auth.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Puppeteer](https://github.com/puppeteer/puppeteer) - Headless Chrome Node.js API by the Google Chrome team.
- [node-wifi](https://github.com/friedrith/node-wifi) - Wi-Fi connection management for Node.js.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
```

Feel free to adjust the content to fit your repository details and any other specific requirements you might have.