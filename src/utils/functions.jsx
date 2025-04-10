export const downloadResume = () => {
  const link = document.createElement("a");
  link.download = "Ramsundar_FullStack_Resume.pdf";
  link.href = "/Ramsundar_FullStack_Resume.pdf";
  link.setAttribute("class", "resume-link-2");
  link.click();

  window.open(
    "https://drive.google.com/file/d/1vWjhCpdNNpW1IHd9epRikS5D61vI_vv4/view?usp=sharing",
    "_blank"
  );
};

export const githubHandle = () => {
  window.open("https://github.com/ramR3R", "_blank");
};

export const customAnchor = (href) => {
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("class", "resume-link-2");
  link.click();
};

export const parseBoldText = (text) => {
  const parts = text.split(/(\*.*?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <b className="bold-text" key={index}>
          {part.slice(1, -1)}
        </b>
      );
    }
    return <span key={index}>{part}</span>;
  });
};
