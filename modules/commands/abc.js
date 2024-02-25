module.exports.config = {
  name: "abc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khanh Shado",
  description: "",
  commandCategory: "Trò chơi",
  usages: "abc",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users, Currencies }) {
  const { threadID, messageID, senderID } = event;
  const name = (await Users.getNameUser(senderID).name;
  return api.sendMessage(`Test ${name}`, threadID, messageID);
}