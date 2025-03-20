import { buttonTheme } from "@/theme/button";

interface PreviewNewsProps {
  id: number;
  date: string;
  title: string;
}
interface NewsCardProps {
  previewNews: PreviewNewsProps[];
}
export function NewsCard({ previewNews }: NewsCardProps) {
  return (
    <div className="flex flex-col p-12 md:pr-40 bg-[#EEEEEE] gap-4">
      <h1 className="uppercase text-[#0B5565] font-inter text-xs font-medium">
        The latest <br />
        <span className="text-4xl text-black font-light">News</span>
      </h1>
      <div className="flex flex-col gap-2">
        {previewNews.map((item, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <h1 className="font-bold text-xs text-[#3E3E3E] font-inter">
              {item.date}
            </h1>
            <h1 className="font-bold italic text-xs text-[#3E3E3E] font-ptsans">
              {item.title}
            </h1>
            <div>
              <button className="text-[#E17F00] text-xs font-normal">
                read more
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className={buttonTheme({ variant: "primary" })}>view all</button>
    </div>
  );
}
