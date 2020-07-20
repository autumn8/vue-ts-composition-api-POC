export default () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function isInGroup(auth: any, group: string): Promise<boolean> {
    const user = await auth.getUser();
    return !!user && user.groups.includes(group);
  }

  return {
    isInGroup
  };
};
