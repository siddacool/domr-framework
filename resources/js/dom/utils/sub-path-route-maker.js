function subPathRouteMaker(subpath, routes) {
  const thisRoutes = routes;
  thisRoutes.map(x => x.path = `${subpath}${x.path ? x.path : ''}`);

  return thisRoutes;
}

export default subPathRouteMaker;

