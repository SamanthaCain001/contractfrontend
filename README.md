# Edge6 Frontend - Rainbow Wallet Integration

A React application that enables users to connect their Rainbow wallet and other Ethereum-compatible wallets.

## Features

- 🌈 **Rainbow Wallet Support** - Seamless integration with Rainbow wallet
- 🦊 **MetaMask Compatible** - Works with MetaMask and other Ethereum wallets
- 💰 **Balance Display** - Shows wallet address and ETH balance
- 🔌 **Easy Connection** - One-click wallet connection and disconnection
- 📱 **Responsive Design** - Works on desktop and mobile browsers

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Rainbow Wallet or MetaMask browser extension

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

1. **Install a Wallet**: Make sure you have Rainbow Wallet, MetaMask, or another Ethereum-compatible wallet installed in your browser.

2. **Connect Wallet**: Click the "Connect Rainbow Wallet" button on the homepage.

3. **Authorize Connection**: Approve the connection request in your wallet extension.

4. **View Details**: Once connected, you'll see:
   - Your wallet address
   - Current ETH balance
   - Disconnect option

5. **Disconnect**: Click the "Disconnect" button to disconnect your wallet.

## Supported Wallets

- **Rainbow Wallet** - Primary support with optimized UX
- **MetaMask** - Full compatibility
- **Other Ethereum Wallets** - Any wallet that supports the standard Ethereum provider API

## Technical Details

### Dependencies

- **React** (^18.2.0) - UI framework
- **ethers** (^6.15.0) - Ethereum library for wallet interactions
- **react-scripts** (5.0.1) - Build tools and development server

### Architecture

The application uses the Ethereum provider API (`window.ethereum`) to:
- Detect installed wallets
- Request account access
- Retrieve wallet addresses
- Fetch account balances
- Handle connection state

### Key Components

- `App.js` - Main component with wallet connection logic
- `checkConnection()` - Automatically detects existing connections
- `connectWallet()` - Initiates new wallet connections
- `updateBalance()` - Fetches and displays ETH balance
- `disconnectWallet()` - Clears connection state

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Code Structure

```
src/
├── App.js          # Main application component
├── App.css         # Application styles
├── index.js        # Application entry point
└── index.css       # Global styles
```

## Security Considerations

- Never store private keys in the application
- Always validate user inputs
- Use secure RPC endpoints for production
- Implement proper error handling for wallet interactions

## Browser Support

- Chrome/Chromium-based browsers (recommended)
- Firefox
- Safari (with wallet extension support)
- Edge

## Troubleshooting

### Common Issues

1. **"Please install MetaMask or Rainbow Wallet!" error**
   - Install a compatible wallet extension
   - Refresh the page after installation

2. **Connection fails**
   - Check if wallet extension is unlocked
   - Ensure you're on a supported network
   - Try refreshing the page

3. **Balance not showing**
   - Check network connection
   - Verify wallet is connected to Ethereum mainnet
   - Wait a moment for balance to load

### Development Issues

1. **npm start fails**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install --legacy-peer-deps`
   - Try `npm start` again

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in this repository
- Check existing issues for solutions
- Review the troubleshooting section above

---

Built with ❤️ using React and ethers.js