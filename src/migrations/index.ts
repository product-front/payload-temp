import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260420_224744 from './20260420_224744';
import * as migration_20260420_230727 from './20260420_230727';
import * as migration_20260421_034315 from './20260421_034315';
import * as migration_20260421_045129 from './20260421_045129';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260420_224744.up,
    down: migration_20260420_224744.down,
    name: '20260420_224744',
  },
  {
    up: migration_20260420_230727.up,
    down: migration_20260420_230727.down,
    name: '20260420_230727',
  },
  {
    up: migration_20260421_034315.up,
    down: migration_20260421_034315.down,
    name: '20260421_034315',
  },
  {
    up: migration_20260421_045129.up,
    down: migration_20260421_045129.down,
    name: '20260421_045129'
  },
];
