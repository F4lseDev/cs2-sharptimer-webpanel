import { query } from 'gamedig';

async function queryServer(ip, port) {
  try {
    const state = await query({
      type: 'csgo',
      host: ip,
      port: port,
    });

    return {
      name: state.name,
      map: state.map,
      players: state.players.length,
      maxPlayers: state.maxplayers,
      ping: state.ping,
      gameMode: state.raw.game || 'Unknown',
    };
  } catch (error) {
    console.error(`Error querying server ${ip}:${port}:`, error);
    return null;
  }
}

export default queryServer;