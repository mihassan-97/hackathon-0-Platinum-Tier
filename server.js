import { logEvent } from './skills/resilience-logging/index.js';
console.log('Autonomous AI Employee Gold Tier Ready!');
console.log('Run:');
console.log('  npm run loop  # Start Ralph Wiggum autonomous loop');
console.log('  npm run audit # Sunday CEO briefing');
console.log('Test: Create file Vault/Needs_Action/Business/test.md');
logEvent('server', 'started');

