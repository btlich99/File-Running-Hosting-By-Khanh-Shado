const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Khanh Shado',
  description: "Lệnh AI có thể hỏi và phản hồi câu trả lời của bạn.",
  commandCategory: 'Tiện ích',
  usages: "/ai [câu hỏi]",
  cooldowns: 3,
};

module.exports.run = async function ({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Dùng: ${global.config.PREFIX}${this.config.name} [câu hỏi]`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`\n`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openaikey.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('Không thể gửi yêu cầu của bạn!', event.threadID, event.messageID);
  }
};