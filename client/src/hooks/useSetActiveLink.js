import { useEffect, useRef } from "react";

export const useSetActiveLink = ({ setState, activeLinkId }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY >=
        sectionRef.current.offsetTop - sectionRef.current.clientHeight / 2
      ) {
        setState(activeLinkId);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.addEventListener("scroll", onScroll);
  }, [activeLinkId, setState]);

  return sectionRef;
};
