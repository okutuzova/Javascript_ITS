const output = document.getElementById('output');
let watchId = null;

function log(message) {
  const p = document.createElement('p');
  p.textContent = message;
  output.appendChild(p);
}

// One-time location fetch
document.getElementById('get-location').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        log(`📍 Current position: 
          Latitude: ${position.coords.latitude}, 
          Longitude: ${position.coords.longitude}`);
      },
      (error) => {
        log(`❌ Error: ${error.message}`);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  } else {
    log('Geolocation is not supported by this browser.');
  }
});

// Start watching location
document.getElementById('start-watch').addEventListener('click', () => {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(
      (position) => {
        log(`🔄 Updated position: 
          Latitude: ${position.coords.latitude}, 
          Longitude: ${position.coords.longitude}`);
      },
      (error) => {
        log(`❌ Error: ${error.message}`);
      },
      { enableHighAccuracy: true }
    );
    log('▶️ Started watching position...');
  }
});

// Stop watching location
document.getElementById('stop-watch').addEventListener('click', () => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    log('⏹️ Stopped watching location.');
  }
});
