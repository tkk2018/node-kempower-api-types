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

| Fields              | Changes             | Result                                        |
| ------------------- | ------------------- | --------------------------------------------- |
| tenantIdMaintenance | Remove `@required`. | [TenantId](./src/TenantId.ts)                 |
| chargedEnergyKwh    | Remove `@required`. | [TransactionBase](./src/TransactionBase.ts)   |
| powerKw             | Add nullable        | [TransactionBase](./src/TransactionBase.ts)   |
| txId                | Add `@required`.    | [TransactionBase](./src/TransactionBase.ts)   |
| artificialId        | Add undefinable     | [EvClusterDetails](./src/EvClusterDetails.ts) |
| clusterGroupId      | Add field           | [EvClusterDetails](./src/EvClusterDetails.ts) |
| clusterGroupName    | Add field           | [EvClusterDetails](./src/EvClusterDetails.ts) |
| coOccurrenceScore   | Add field           | [EvClusterDetails](./src/EvClusterDetails.ts) |
| chargingForecastV3  | Add undefinable     | [Transaction](./src/Transaction.ts)           |
| current             | Add nullable        | [Transaction](./src/Transaction.ts)           |
| maxPowerKw          | Add nullable        | [Transaction](./src/Transaction.ts)           |
| parentId            | Add nullable        | [Transaction](./src/Transaction.ts)           |
| power               | Add nullable        | [Transaction](./src/Transaction.ts)           |
| timeToBulk          | Add nullable        | [Transaction](./src/Transaction.ts)           |
| timeToFull          | Add nullable        | [Transaction](./src/Transaction.ts)           |
| voltage             | Add nullable        | [Transaction](./src/Transaction.ts)           |
