
const testmailSpace = '7bfht';
const testmailApiKey = '079b5109-d6b0-4fc6-8c17-e221a1c21742';

const response = http.get(`https://api.testmail.app/api/json?apikey=${testmailApiKey}&namespace=${testmailSpace}&tag=testuserex&from=${Date.now() - 20000}&livequery=true`);

output.code = json(response.body).emails[0].html.replace(/\D/g, '')