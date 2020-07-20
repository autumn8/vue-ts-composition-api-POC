export default () => {
  const nameRules: Array<(v: string) => boolean | string> = [];
  const nameRequired = (v: string) => !!v.length || "Name is required";
  const minNumRequiredCharacters = (v: string) =>
    (v && v.length <= 5) || "Name must be less than 5 characters";

  nameRules.push(nameRequired);
  nameRules.push(minNumRequiredCharacters);
  return { nameRules };
};
