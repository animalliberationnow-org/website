import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QRPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectMap: Record<string, string> = {
      link1: "/resources",
      link2: "/faqs",
      link3: "/support",
    };

    const destination = redirectMap[slug || ""];

    if (destination) {
      navigate(destination, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [slug, navigate]);

  return null;
};

export default QRPage;
