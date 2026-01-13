export const vExternalLinks = {
  updated(el: HTMLElement) {
    const links = el.querySelectorAll("a[href^='http']");
    links.forEach((link) => {
      const anchor = link as HTMLAnchorElement;
      if (anchor.hostname !== window.location.hostname) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    });
  },
};
