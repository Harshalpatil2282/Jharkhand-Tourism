# NextEraX - Blockchain-Enabled Tourist Guide Platform for Jharkhand

![Jharkhand Tourism](./frontend/nexterax-app/public/hero-background.png)

NextEraX is a revolutionary blockchain-based platform that transforms the tourism experience in Jharkhand by connecting tourists with verified local guides, providing immersive experiences, and ensuring secure transactions through smart contracts.

## 🌟 Key Features

- **Blockchain-Powered Guide Verification** - Secure and transparent guide verification system
- **Soulbound NFT Certificates** - Unique non-transferable certificates for verified guides
- **AR/VR Experiences** - Immersive virtual tours and augmented reality experiences
- **Smart Contract Bookings** - Secure and automated booking system
- **AI Tourism Assistant** - Intelligent chatbot for personalized recommendations
- **360° Virtual Tours** - Panoramic views of tourist destinations
- **Real-time Analytics** - Comprehensive tourism insights dashboard
- **Interactive Maps** - Location-based guide and attraction discovery
- **Decentralized Marketplace** - Platform for local artisans and service providers
- **Multi-layer Authentication** - Secure access for guides, tourists, and admins

## 🛠️ Technology Stack

### Frontend
- React.js
- Web3.js
- Three.js (for AR/VR)
- Leaflet.js (for Maps)
- CSS3 Animations

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Blockchain
- Solidity Smart Contracts
- Hardhat Development Environment
- OpenZeppelin Contracts
- Ethereum (Sepolia Testnet)

## 📦 Project Structure

```
nexterax/
├── frontend/              # React frontend application
│   ├── nexterax-app/     # Main React application
│   │   ├── src/          # Source code
│   │   ├── public/       # Static assets
│   │   └── ARVR/        # AR/VR experiences
├── backend/              # Node.js backend server
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
├── contracts/           # Solidity smart contracts
├── scripts/            # Deployment and test scripts
└── navigation/         # Street view and navigation
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14.0.0
- npm or pnpm
- Metamask wallet
- Hardhat
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshalpatil2282/Jharkhand-Tourism.git
   cd nexterax
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend/nexterax-app && npm install
   cd ../../backend && npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Add your configuration values
   ```

4. Start the development environment:
   ```bash
   # Start blockchain node
   npm run node

   # Deploy contracts (in a new terminal)
   npm run deploy:local

   # Start backend server (in a new terminal)
   cd backend && npm start

   # Start frontend (in a new terminal)
   npm run frontend
   ```

## 🔧 Smart Contracts

The platform uses three main smart contracts:
- **NexteraXToken.sol** - Platform utility token
- **SoulboundNFT.sol** - Non-transferable guide certificates
- **PlatformCore.sol** - Core platform logic and booking management

## 🌍 Features in Detail

### For Tourists
- Browse verified local guides
- Book tours securely through smart contracts
- Experience AR/VR tours
- Provide feedback and ratings
- Access 360° virtual tours
- Get AI-powered recommendations

### For Guides
- Secure profile verification
- Receive Soulbound NFT certificates
- Manage bookings and availability
- Showcase expertise and services
- Access real-time analytics
- Receive secure payments

### For Admins
- Verify guide applications
- Monitor platform analytics
- Manage user reports
- Overview of booking statistics
- Control platform parameters

## 📱 Tourist Attractions

The platform covers major attractions in Jharkhand including:
- Betla National Park
- Hundru Falls
- Deoghar Temples
- Parasnath Hills
- Dassam Falls
- Lodh Falls
- Rajrappa Temple
- And many more local destinations

## 🌟 Unique Features

1. **AR/VR Integration**
   - Virtual tours of destinations
   - AR-enhanced location information
   - Interactive 360° views

2. **Blockchain Security**
   - Soulbound NFT certificates
   - Smart contract-based payments
   - Transparent verification system

3. **AI Assistant**
   - Personalized recommendations
   - 24/7 tourist support
   - Multi-language assistance

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Jharkhand Tourism Department
- Local Guide Communities
- OpenZeppelin Team
- React and Node.js Communities

## 📞 Contact

For queries and support:
- Website: [NextEraX.com]
- Email: support@nexterax.com
- Twitter: [@NextEraX]
- Telegram: [NextEraX_Community]

---

Built with ❤️ for Jharkhand Tourism