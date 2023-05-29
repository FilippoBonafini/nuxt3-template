// export default defineEventHandler(
//   (event) => `Ciao, ${event.context.params.name}!`
// );

export default defineEventHandler((event) => {
  return {
    text: `Ciao, ${event.context.params.name}!`,
  };
});
