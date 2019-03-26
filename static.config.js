export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  getSiteData: async () => ({
    title: 'Jon Linnell',
  }),
  siteRoot: 'https://jonlinnell.co.uk/',
};
