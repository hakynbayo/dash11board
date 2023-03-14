# ENDPOINTS

Report any endpoint that requires authentication
    
- [LIVE TICKER TAPE](https://comx-sand-api.afex.dev/api/security-price/live): `https://comx-sand-api.afex.dev/api/security-price/live`
    
    - Security Code
    - Board
    - Price
    - Lowest Price
    - Location Code
    - Highest Price
    - Transaction Fee Configuration
    
- [PRODUCT VIEW](https://comx-sand-api.afex.dev/api/securities/boards): `https://comx-sand-api.afex.dev/api/securities/boards`

    - Code
    - Name
    - Board
    - Board Code
    - Community Code
    - Volume per Unit
    - Security Type
    - Best Buy
    - Best Sell
    - Daily Change
    
- [CLIENT POSITIONS](wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747): `wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747`

    - Cash Cover
    - Client Storage Depository (CSD)
    - Portfolio
    - Stock Cover
    - Wallets
  
- [ORDER BOOK](wss://comx-sand-api.afex.dev/stream/trades): `wss://comx-sand-api.afex.dev/stream/trades`

    - CID
    - TID
    - Client Information
    - Security Code
    - Commodity Code
    - Units
    - Order Type
    - Board Type
    - Order Price
    - Matched Quantity
    - Status
    - Security Type
    - Security Location Code