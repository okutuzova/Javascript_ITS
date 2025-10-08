self.addEventListener('message', async (e) => {
    if (e.data === 'start') {
      // const interval = e.data.interval || 10000; // update every 10 secs
  
      const sendCat = async () => {
        try {
          const url = `https://cataas.com/cat?width=200&height=200&random=${Math.random()}`;
          const response = await fetch(url);
          const blob = await response.blob();
  
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            self.postMessage(base64data);
          };
          reader.readAsDataURL(blob);
        } catch (err) {
          console.error(err);
          self.postMessage('error');
        }
      };
  
      await sendCat(); // first image
      // const timer = setInterval(sendCat, interval);
  
      // self.addEventListener('message', (e) => {
      //   if (e.data === 'stop') {
          // clearInterval(timer);
          // self.postMessage('stopped');
        // }
      // });
    }
  });
  
  export {};
  