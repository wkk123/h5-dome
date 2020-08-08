import net from "./net";

const getTicket = async () => {
  const data = await net.get('');
  return data;
};

const getCode = async (age) => {
  const data = await net.post('', {...age});
  return data;
};


export { 
  getCode,
  getTicket, 
};