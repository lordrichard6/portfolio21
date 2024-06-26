const button = {
  text: "Download in PDF",
  link: "https://drive.google.com/file/d/1G28rYr540R-Tj57Be2jcwb3OhA4TBO6Q/view?usp=sharing"
}

export default function DownloadButton({style}) {

  return (
        <div className={`btn-download mb-4 w-full justify-end ${style}`}>
          <button className="px-4 py-2 mx-4 rounded-md cursor-pointer w-fit lg:ml-auto lg:bg-slate-100 bg-slate-800 border-none z-10">
            <a className="text-2xl font-semibold" href={button.link} target="_blank" rel="noopener noreferrer">{button.text}</a>
          </button>
        </div>
  );
}
