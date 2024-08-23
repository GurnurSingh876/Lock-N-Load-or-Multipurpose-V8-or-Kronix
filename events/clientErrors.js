const { WebhookClient } = require('discord.js');
const client = require('../index.js');

const webhookUrl = 'https://discord.com/api/webhooks/1155505170390724670/3TyYiF5LP8roDhx9flOggI5Svs6h8f2lqa9rclMHmPtBnUDPTQoasAxmijXUbzuaam3V';
const webhookClient = new WebhookClient({ url: webhookUrl });

client.on('error', (error) => {
  handleError(error);
});

process.on('uncaughtException', (error) => {
  handleError(error);
});

process.on('unhandledRejection', (reason, promise) => {
  handleError(reason);
});

async function handleError(error) {
  const errorMessage = error instanceof Error ? error.stack || error.toString() : JSON.stringify(error);
  await sendErrorMessage(errorMessage);
}

async function sendErrorMessage(errorMessage) {
  try {
    await webhookClient.send(errorMessage);
  } catch (error) {
    console.error('Failed to send error message:', error);
  }
}
