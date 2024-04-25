# Type Defination for Kempower REST API

The offical website:

[ChargEye REST API Documentation](https://docs.kempower.io/).

CODE RESOURCES

- [x] Charging Stations API
- [x] Locations API
- [x] Transactions API
- [x] Vehicles API

COMMAND & CONTROL

- [ ] Charger Operations API
- [ ] Load Balancing API

## Changes

| Fields              | Changes             | Result                                      |
| ------------------- | ------------------- | ------------------------------------------- |
| tenantIdMaintenance | Remove `@required`. | [TenantId](./src/TenantId.ts)               |
| chargedEnergyKwh    | Remove `@required`. | [TransactionBase](./src/TransactionBase.ts) |
| txId                | Add `@required`.    | [TransactionBase](./src/TransactionBase.ts) |
