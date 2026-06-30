// Centralized imagery for portfolio projects, keyed by project id.
// Used by the home showcase, the portfolio grid, and project detail pages.
const base = 'https://images.unsplash.com/photo-';
const params = '?q=80&w=1400&auto=format&fit=crop';

export const PROJECT_IMAGES = {
  1: `${base}1581092580497-e0d23cbdf1dc${params}`, // Plumbing — blueprint
  2: `${base}1503387762-592deb58ef4e${params}`,    // Roofing — drafting
  3: `${base}1416339306562-f3d12fefd36f${params}`, // Landscaping — landscape
  4: `${base}1497366216548-37526070297c${params}`, // HVAC — office
  5: `${base}1600585154340-be6161a56a0c${params}`, // Interior — interior
  6: `${base}1551434678-e076c223a692${params}`,    // Law — team
  7: `${base}1559028012-481c04fa702d${params}`,    // Dental — workspace
  8: `${base}1547658719-da2b51169166${params}`,    // Restaurant — desk
  9: `${base}1517180102446-f3ece451e9d8${params}`, // Construction — building
};

export const projectImage = (id) => PROJECT_IMAGES[id] || PROJECT_IMAGES[1];
