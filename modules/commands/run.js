module.exports.config = {
  name: 'run',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Khanh Shado',
  description: 'Run a code',
  commandCategory: 'Admin',
  usages: '[code]',
  cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
  var { threadID, messageID } = event;
  var run = args.join(" ");
  return api.sendMessage(`${run}`, threadID, messageID);
}