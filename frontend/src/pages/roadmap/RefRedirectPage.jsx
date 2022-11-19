import { useLocation } from "react-router-dom";

const RefRedirectPage = () => {
  const location = useLocation();
  const url = location.state.url;
  // if (url) window.location.href = url;
  if(url) window.open(`${url}`, '_blank')

  return null;
};

export default RefRedirectPage;