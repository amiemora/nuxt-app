export default defineEventHandler(async (event) => {
  //handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  //api call with private key
  //cur_live_OczhlPqYdY3MoTXkHTL8NeH1XStb1SkLkYYwPoub
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_OczhlPqYdY3MoTXkHTL8NeH1XStb1SkLkYYwPoub"
  );

  return data;
  // return {
  //   message: `Hello, ${name}! You are ${age} years old`,
  // };
});
