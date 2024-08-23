
module.exports = async (client) => {

  client.on('error',  (error) => {

  if(error.code === 429) {

  console.log(error.message)

   handleRateLimit();

  }

   })

  }

  async function handleRateLimit() {

      globalCooldown = true;

      await sleep(5000);

      globalCooldown = false;

    }

  

    async function sleep(ms) {

      return new Promise((resolve) => setTimeout(resolve, ms))

  }