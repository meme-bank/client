import clsx from "clsx";
import { useNavigate } from "react-router";

export const AdBlock: React.FC<{ promoUrl: string; bannerUrl: string; className?: string; }> = ({ promoUrl, bannerUrl, className }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(promoUrl)} className={clsx("aspect-[9/2] w-full animate-in cursor-pointer group border rounded bg-center bg-cover", className)
    } style={{ backgroundImage: "url(" + bannerUrl + ")" }}>
      <div className="text-xs select-none group-hover:bg-background/70 group-hover:text-foreground duration-150 text-foreground/0 bg-background/0 p-0.5 px-1 rounded-sm m-0.5 inline-block">НБМ Реклама</div>
    </div >
  )
};